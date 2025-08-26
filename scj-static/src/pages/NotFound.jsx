import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold mb-4 text-yellow-400">404</h1>
        <p className="text-2xl md:text-3xl font-semibold mb-2">
          Oops! Page not found.
        </p>
        <p className="text-gray-400 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-black font-bold rounded shadow hover:scale-105 transform transition"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
