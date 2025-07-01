import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email address");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API_BASE_URL}/forgot-password`, { email });
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        navigate("/signin");
      }, 3000);
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to send reset instructions');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Brand Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-b from-gray-900 via-purple-900 to-purple-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
                               radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
            }}
          />
        </div>

        {/* Logo */}
        <div className="absolute top-8 left-8">
          <img
            src="/scj-logo-new.png"
            alt="SCJ Entertainment"
            className="h-16 w-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          />
        </div>

        {/* Quote */}
        <div className="absolute bottom-12 left-8 right-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Forgot your password? <br /> No worries! 🔐
          </h2>
          <p className="text-purple-100 text-lg leading-relaxed max-w-md">
            We'll help you reset your password and get back to creating amazing content with SCJ Entertainment.
          </p>
        </div>
      </div>

      {/* Right Side - Reset Password Form */}
      <div className="w-full lg:w-1/2 bg-black flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-8 text-center">
            <img
              src="/scj-logo-new.png"
              alt="SCJ Entertainment"
              className="h-12 w-auto mx-auto drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]"
            />
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Reset Your Password</h1>
            <p className="text-gray-400">Enter your email address and we'll send you instructions to reset your password.</p>
          </div>

          <form onSubmit={handleResetPassword} className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>

            {/* Reset Password Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Reset Password →'}
            </button>

            {/* Success Message */}
            {success && (
              <div className="text-green-400 text-center bg-green-400/10 p-4 rounded-lg">
                Password reset instructions have been sent to your email!
              </div>
            )}

            {/* Back to Sign In */}
            <div className="text-center">
              <button
                type="button"
                onClick={() => navigate("/signin")}
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200 underline"
              >
                Back to Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
