"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaUserCircle, FaSearch, FaSignOutAlt, FaCog, FaBell, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleNotifications = () => setNotificationsOpen(!notificationsOpen);
  const clearSearch = () => setSearchQuery("");

  return (
<header className="fixed top-0 left-64 w-[calc(100%-16rem)] shadow-md flex justify-between items-center p-4 bg-white text-gray-900 z-50 ">
{/* Dashboard Title */}
      <div className="max-w-screen-xl mx-auto w-full flex justify-between items-center">
        <h2 className="text-lg font-semibold">Admin Dashboard</h2>

        {/* Search Bar */}
        <div className="relative flex items-center bg-gray-100 rounded-md px-3 py-2 w-72 shadow-sm">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="ml-2 w-full bg-transparent outline-none text-gray-700"
          />
          {searchQuery && (
            <button onClick={clearSearch} className="ml-2 text-gray-500 hover:text-gray-700">
              <FaTimes />
            </button>
          )}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Notifications Bell */}
          <div className="relative">
            <button onClick={toggleNotifications} className="relative hover:text-blue-600 transition">
              <FaBell className="text-2xl text-gray-600" />
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                3
              </span>
            </button>

            {notificationsOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-10 border"
              >
                <p className="px-4 py-2 text-gray-800">You have 3 new notifications</p>
                <hr className="border-gray-200 my-1" />
                <p className="px-4 py-2 text-gray-600 text-sm">🔔 System update completed</p>
                <p className="px-4 py-2 text-gray-600 text-sm">📌 New task assigned</p>
                <p className="px-4 py-2 text-gray-600 text-sm">🛑 Security alert detected</p>
              </motion.div>
            )}
          </div>

          {/* User Profile Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-2 focus:outline-none hover:text-blue-600 transition"
            >
              <FaUserCircle className="text-3xl text-gray-600" />
            </button>

            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10 border"
              >
                <button className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left transition">
                  Profile
                </button>
                <button className=" px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left flex items-center gap-2 transition">
                  <FaCog className="text-blue-500" /> Settings
                </button>
                <hr className="border-gray-200 my-1" />
                <button className="px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left flex items-center gap-2 transition">
                  <FaSignOutAlt className="text-red-500" /> Logout
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
