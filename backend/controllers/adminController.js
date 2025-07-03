const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.createAdmin = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const existing = await User.findOne({ where: { email } });
    console.log(existing);
    if (existing) {
      return res.status(400).json({ message: "User is already Admin" });
    }

    const hashed = await bcrypt.hash(password, 10);
    const admin = await User.create({
      name,
      email,
      password: hashed,
      role: "admin",
    });

    res.status(201).json({ message: "Admin user created successfully" });
  } catch (err) {
    next(err);
  }
};
