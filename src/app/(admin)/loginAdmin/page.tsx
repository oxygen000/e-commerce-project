"use client";

import { useState, useCallback } from "react";
import { FaUserShield, FaLock, FaSignInAlt, FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginAdmin() {
  const [adminId, setAdminId] = useState(""); // Admin username or email
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Perform admin login logic here
    setTimeout(() => setLoading(false), 2000);
  };

  const handleAdminIdChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setAdminId(e.target.value);
  }, []);

  const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/admin-login-bg.jpg')" }}>
      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-lg p-8 w-full max-w-lg backdrop-blur-md bg-opacity-90 dark:bg-opacity-95">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
          Admin Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <FaUserShield className="absolute left-4 top-4 text-gray-500 dark:text-gray-400" />
            <input
              type="text"
              placeholder="Admin ID or Email"
              value={adminId}
              onChange={handleAdminIdChange}
              className="w-full pl-12 p-4 border border-gray-300 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
              required
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-4 top-4 text-gray-500 dark:text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full pl-12 p-4 border border-gray-300 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-4 text-gray-500 dark:text-gray-400 transition-all duration-300 hover:text-primary"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-gray-700 dark:text-gray-300">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="mr-2"
              />
              Stay Logged In
            </label>
           
          </div>
          <button
            type="submit"
            className="w-full flex justify-center items-center bg-primary text-white py-4 rounded-lg hover:bg-primary-dark transition-all duration-300"
            disabled={loading}
          >
            {loading ? "Logging in..." : (<><FaSignInAlt className="ml-2" /> Log In</>)}
          </button>
        </form>
      </div>
    </div>
  );
}
