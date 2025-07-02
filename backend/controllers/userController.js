const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// In-memory rate limit store (for demo; use Redis in production)
const forgotPasswordRequests = {};

function verificationEmailTemplate(link) {
  return `
    <div style="font-family: 'Poppins', 'Montserrat', Arial, sans-serif; background: #f7fafd; padding: 32px; border-radius: 16px; max-width: 420px; margin: 40px auto; box-shadow: 0 4px 24px rgba(0,0,0,0.08); border: 1px solid #f3e9c7;">
      <div style="text-align:center; margin-bottom: 18px;">
        <img src='https://raw.githubusercontent.com/your-repo-path/scj-website/main/public/scj-logo-new.png' alt="SCJ Entertainment Logo" style="width: 120px; height: auto; margin-bottom: 8px; filter: drop-shadow(0 0 15px #ffd70088);" />
      </div>
      <h2 style="color: #1a237e; font-weight: 800; letter-spacing: 1px; margin-bottom: 12px;">SCJ Entertainment</h2>
      <p style="font-size: 16px; color: #333; margin-bottom: 24px;">Please verify your email by clicking the button below:</p>
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin: 24px auto;">
        <tr>
          <td align="center">
            <a href="${link}" style="display: inline-block; padding: 14px 32px; background: linear-gradient(90deg, #FFD700 0%, #FFA500 100%); color: #1a237e; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 16px; box-shadow: 0 2px 8px #ffd70044; font-family: 'Poppins', 'Montserrat', Arial, sans-serif;">Verify Email</a>
          </td>
        </tr>
      </table>
      <p style="font-size: 14px; color: #666; margin-top: 24px;">This link will expire in <b>15 minutes</b>.</p>
    </div>
  `;
}

function confirmationEmailTemplate(name) {
  return `
    <div style="font-family: 'Poppins', 'Montserrat', Arial, sans-serif; background: #f7fafd; padding: 32px; border-radius: 16px; max-width: 420px; margin: 40px auto; box-shadow: 0 4px 24px rgba(0,0,0,0.08); border: 1px solid #f3e9c7;">
      <div style="text-align:center; margin-bottom: 18px;">
        <img src='https://raw.githubusercontent.com/your-repo-path/scj-website/main/public/scj-logo-new.png' alt="SCJ Entertainment Logo" style="width: 120px; height: auto; margin-bottom: 8px; filter: drop-shadow(0 0 15px #ffd70088);" />
      </div>
      <h2 style="color: #1a237e; font-weight: 800; letter-spacing: 1px; margin-bottom: 12px;">SCJ Entertainment</h2>
      <p style="font-size: 16px; color: #333; margin-bottom: 18px;">Hello${name ? ' ' + name : ''},</p>
      <p style="font-size: 16px; color: #333;">Your email has been successfully verified. Welcome to <span style='color: #FFA500; font-weight: 700;'>SCJ Entertainment</span>!</p>
      <p style="font-size: 14px; color: #666; margin-top: 24px;">You can now log in and enjoy our services.</p>
    </div>
  `;
}

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const existing = await User.findOne({ where: { email } });
    if (existing) return res.status(400).json({ message: 'Email already registered' });
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed });
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '15m' });
    const url = `${process.env.BASE_URL}/api/users/verify/${token}`;
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Verify your email',
      html: verificationEmailTemplate(url)
    });
    res.status(201).json({ message: 'Registration successful, check your email to verify.' });
  } catch (err) { next(err); }
};

exports.verifyEmail = async (req, res, next) => {
  try {
    const { token } = req.params;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id);
    if (!user) return res.status(400).json({ message: 'Invalid link' });
    if (user.verified) return res.json({ message: 'Already verified' });
    user.verified = true;
    await user.save();
    // Send confirmation email after verification
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: user.email,
      subject: 'Your email has been verified!',
      html: confirmationEmailTemplate(user.name || user.username || '')
    });
    res.json({ message: 'Email verified successfully' });
  } catch (err) { next(err); }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    if (!user.verified) return res.status(403).json({ message: 'Please verify your email first' });
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token });
  } catch (err) { next(err); }
};

exports.resendVerification = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: 'Email is required' });
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: 'User not found' });
    if (user.verified) {
      return res.status(400).json({ message: 'User already verified' });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '15m' });
    const url = `${process.env.BASE_URL}/api/users/verify/${token}`;
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Verify your email',
      html: verificationEmailTemplate(url)
    });
    res.json({ message: 'Verification email resent' });
  } catch (err) {
    next(err);
  }
};

exports.welcomeEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: 'Email is required' });
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: 'User not found' });
    if (user.verified) {
      return res.status(400).json({ message: 'User already verified' });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '15m' });
    const url = `${process.env.BASE_URL}/api/users/verify/${token}`;
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: user.email,
      subject: 'Welcome to SCJ Entertainment!',
      html: welcomeEmailTemplate(user.name),
    });
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Verify your email',
      html: verificationEmailTemplate(url)
    });
    res.json({ message: 'Welcome email sent' });
  } catch (err) {
    next(err);
  }
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  const now = Date.now();
  if (!forgotPasswordRequests[email]) forgotPasswordRequests[email] = [];
  // Remove requests older than 1 hour
  forgotPasswordRequests[email] = forgotPasswordRequests[email].filter(ts => now - ts < 60 * 60 * 1000);
  if (forgotPasswordRequests[email].length >= 3) {
    return res.status(429).json({ message: 'Too many password reset requests. Please try again later.' });
  }
  forgotPasswordRequests[email].push(now);

  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(400).json({ message: 'Email not found' });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '15m' });
  const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: email,
    subject: 'Reset Your SCJ Entertainment Password',
    html: `
      <div style="font-family: 'Poppins', 'Montserrat', Arial, sans-serif; background: #fffbe6; padding: 32px; border-radius: 18px; max-width: 440px; margin: 40px auto; box-shadow: 0 4px 24px rgba(0,0,0,0.10); border: 1px solid #ffe082;">
        <div style="text-align:center; margin-bottom: 20px;">
          <img src='https://raw.githubusercontent.com/your-repo-path/scj-website/main/public/scj-logo-new.png' alt="SCJ Entertainment Logo" style="width: 120px; height: auto; margin-bottom: 10px; filter: drop-shadow(0 0 15px #ffd70088);" />
        </div>
        <h2 style="color: #1a237e; font-weight: 800; letter-spacing: 1px; margin-bottom: 16px;">Reset Your Password</h2>
        <p style="font-size: 16px; color: #333; margin-bottom: 28px;">We received a request to reset your password. Click the button below to set a new password. <b>This link will expire in 15 minutes.</b></p>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin: 28px auto;">
          <tr>
            <td align="center">
              <a href="${resetLink}" style="display: inline-block; padding: 16px 36px; background: linear-gradient(90deg, #FFD700 0%, #FFA500 100%); color: #1a237e; border-radius: 10px; text-decoration: none; font-weight: 700; font-size: 17px; box-shadow: 0 2px 8px #ffd70044; font-family: 'Poppins', 'Montserrat', Arial, sans-serif;">Reset Password</a>
            </td>
          </tr>
        </table>
        <p style="font-size: 14px; color: #666; margin-top: 28px;">If you did not request a password reset, you can safely ignore this email or <a href="mailto:support@scjentertainments.com" style="color: #FFA500; text-decoration: underline;">contact support</a>.</p>
        <div style="margin-top: 32px; text-align: center; font-size: 13px; color: #aaa; border-top: 1px solid #ffe082; padding-top: 16px;">&copy; ${new Date().getFullYear()} SCJ Entertainment. All rights reserved.</div>
      </div>
    `
  });

  res.json({ message: 'Password reset link sent to your email.' });
};

exports.resetPassword = async (req, res) => {
  const { token, password } = req.body;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id);
    if (!user) return res.status(400).json({ message: 'Invalid or expired token' });

    user.password = await bcrypt.hash(password, 10);
    await user.save();

    // Send confirmation email after password change
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: user.email,
      subject: 'Your SCJ Entertainment Password Was Changed',
      html: `
        <div style="font-family: 'Poppins', 'Montserrat', Arial, sans-serif; background: #fffbe6; padding: 32px; border-radius: 18px; max-width: 440px; margin: 40px auto; box-shadow: 0 4px 24px rgba(0,0,0,0.10); border: 1px solid #ffe082;">
          <div style="text-align:center; margin-bottom: 20px;">
            <img src='https://raw.githubusercontent.com/your-repo-path/scj-website/main/public/scj-logo-new.png' alt="SCJ Entertainment Logo" style="width: 120px; height: auto; margin-bottom: 10px; filter: drop-shadow(0 0 15px #ffd70088);" />
          </div>
          <h2 style="color: #1a237e; font-weight: 800; letter-spacing: 1px; margin-bottom: 16px;">Password Changed</h2>
          <p style="font-size: 16px; color: #333; margin-bottom: 24px;">Hello${user.name ? ' ' + user.name : ''},</p>
          <p style="font-size: 16px; color: #333;">Your password for <b>SCJ Entertainment</b> was changed successfully. If you did not perform this action, please <a href="mailto:support@scjentertainments.com" style="color: #FFA500; text-decoration: underline;">contact our support team</a> immediately.</p>
          <div style="margin-top: 32px; text-align: center; font-size: 13px; color: #aaa; border-top: 1px solid #ffe082; padding-top: 16px;">&copy; ${new Date().getFullYear()} SCJ Entertainment. All rights reserved.</div>
        </div>
      `
    });

    res.json({ message: 'Password has been reset successfully.' });
  } catch (err) {
    res.status(400).json({ message: 'Invalid or expired token' });
  }
}; 