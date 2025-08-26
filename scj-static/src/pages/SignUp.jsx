import React, { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

// redux related imports
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/auth/authActions";

// .env variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const GOOGLE_OAUTH_URL = import.meta.env.VITE_GOOGLE_OAUTH_URL;

// function entry point
const SignUpPage = () => {
  const navigate = useNavigate();
  //redux state.auth
  const { loading, error, success } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // form data handling
  const emptyFieldObj = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState(emptyFieldObj);
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // form submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      dispatch(
        registerUser({
          name: formData.firstName + " " + formData.lastName,
          email: formData.email.toLowerCase(),
          password: formData.password,
        }),
      );
    } catch (err) {
      console.log("registration failed");
    }
  };

  // successful registration message
  useEffect(() => {
    if (success) {
      alert("Registration successful");
      navigate("/signin");
    }
  }, [success]);

  // failed registration message
  useEffect(() => {
    if (error) {
      alert(`${error}`);
      setFormData(emptyFieldObj);
    }
  }, [error]);
  return (
    <div className="min-h-screen flex">
      {/* Left - Brand Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-b from-gray-900 via-purple-900 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
                               radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
            }}
          />
        </div>

        <div className="absolute top-8 left-8">
          <img
            src="../public/scj-logo-new.png"
            alt="SCJ Entertainment"
            className="h-16 w-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          />
        </div>

        <div className="absolute bottom-12 left-8 right-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Join our creative <br /> journey today. ✨
          </h2>
          <p className="text-purple-100 text-lg leading-relaxed max-w-md">
            SCJ Entertainment brings stories to life with cinematic excellence
            and cutting-edge innovation.
          </p>
        </div>
      </div>

      {/* Right - Sign Up Form */}
      <div className="w-full lg:w-1/2 bg-black flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8 text-center">
            <img
              src="/scj-logo.png"
              alt="SCJ Entertainment"
              className="h-12 w-auto mx-auto drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]"
            />
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Create Your Account.
            </h1>
            <p className="text-gray-400">
              Let's create your account and get started.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="John"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                aria-label="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  aria-label="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 pr-12"
                  placeholder="••••••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  aria-label="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 pr-12"
                  placeholder="••••••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account →"}
            </button>

            {/* Link to Sign In */}
            <div className="text-center">
              <p className="text-gray-400">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/signin")}
                  className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200 underline"
                >
                  Sign In
                </button>
              </p>
            </div>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-black text-gray-400">OR</span>
              </div>
            </div>

            {/* Social Buttons */}
            <div
              className="grid grid-cols-3 gap-3"
              style={{ marginTop: "1.5rem" }}
            >
              {/* Facebook button (inactive) */}
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                disabled
              >
                <span className="text-blue-500 text-xl">f</span>
              </button>
              {/* X button (inactive) */}
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                disabled
              >
                <span className="text-white text-xl">𝕏</span>
              </button>
              {/* Google button */}
              <a
                href={
                  GOOGLE_OAUTH_URL ||
                  "http://localhost:3000/api/users/auth/google"
                }
                className="flex items-center justify-center px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                style={{ textDecoration: "none" }}
              >
                <span className="text-red-500 text-xl">G</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
