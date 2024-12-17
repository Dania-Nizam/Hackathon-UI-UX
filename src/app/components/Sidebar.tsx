"use client";

import React, { useState } from "react";
import {
  FaHome,
  FaCar,
  FaChartBar,
  FaEnvelope,
  FaCalendarAlt,
  FaCogs,
  FaQuestionCircle,
  FaMoon,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`flex flex-col bg-white shadow-lg transition-all duration-300 
        ${isExpanded ? "w-64" : "w-16"} 
        sm:w-16 md:w-64 lg:w-64 xl:w-64 h-full overflow-auto`}
    >
      {/* Toggle Button */}
      <button
        className="p-4 focus:outline-none text-blue-500 hover:bg-gray-200"
        onClick={toggleSidebar}
      >
        {isExpanded ? "<" : ">"}
      </button>

      {/* Main Menu */}
      <div className="flex-1">
        <div className="text-gray-500 font-bold text-sm uppercase px-4 mt-4">
          Main Menu
        </div>
        <ul className="space-y-2 mt-4">
          <li
            className="flex items-center space-x-4 px-4 py-2 text-gray-600 hover:text-blue-500 hover:bg-gray-200 cursor-pointer"
            onClick={() => alert("Navigate to Dashboard")}
          >
            <FaHome size={20} />
            {isExpanded && <span>Dashboard</span>}
          </li>
          <li
            className="flex items-center space-x-4 px-4 py-2 text-gray-600 hover:text-blue-500 hover:bg-gray-200 cursor-pointer"
            onClick={() => alert("Navigate to Car Rent")}
          >
            <FaCar size={20} />
            {isExpanded && <span>Car Rent</span>}
          </li>
          <li
            className="flex items-center space-x-4 px-4 py-2 text-gray-600 hover:text-blue-500 hover:bg-gray-200 cursor-pointer"
            onClick={() => alert("Navigate to Insight")}
          >
            <FaChartBar size={20} />
            {isExpanded && <span>Insight</span>}
          </li>
          <li
            className="flex items-center space-x-4 px-4 py-2 text-gray-600 hover:text-blue-500 hover:bg-gray-200 cursor-pointer"
            onClick={() => alert("Navigate to Inbox")}
          >
            <FaEnvelope size={20} />
            {isExpanded && <span>Inbox</span>}
          </li>
          <li
            className="flex items-center space-x-4 px-4 py-2 text-gray-600 hover:text-blue-500 hover:bg-gray-200 cursor-pointer"
            onClick={() => alert("Navigate to Calendar")}
          >
            <FaCalendarAlt size={20} />
            {isExpanded && <span>Calendar</span>}
          </li>
        </ul>
      </div>

      {/* Preferences */}
      <div className="border-t mt-4">
        <div className="text-gray-500 font-bold text-sm uppercase px-4 mt-4">
          Preferences
        </div>
        <ul className="space-y-2 mt-4">
          <li
            className="flex items-center space-x-4 px-4 py-2 text-gray-600 hover:text-blue-500 hover:bg-gray-200 cursor-pointer"
            onClick={() => alert("Navigate to Settings")}
          >
            <FaCogs size={20} />
            {isExpanded && <span>Settings</span>}
          </li>
          <li
            className="flex items-center space-x-4 px-4 py-2 text-gray-600 hover:text-blue-500 hover:bg-gray-200 cursor-pointer"
            onClick={() => alert("Navigate to Help & Center")}
          >
            <FaQuestionCircle size={20} />
            {isExpanded && <span>Help & Center</span>}
          </li>
          <li
            className="flex items-center space-x-4 px-4 py-2 text-gray-600 hover:text-blue-500 hover:bg-gray-200 cursor-pointer"
            onClick={() => alert("Toggle Dark Mode")}
          >
            <FaMoon size={20} />
            {isExpanded && <span>Dark Mode</span>}
          </li>
        </ul>
      </div>

      {/* Logout */}
      <div className="mt-auto border-t">
        <ul className="space-y-2 mt-4">
          <li
            className="flex items-center space-x-4 px-4 py-2 text-gray-600 hover:text-red-500 hover:bg-gray-200 cursor-pointer"
            onClick={() => alert("Logging Out")}
          >
            <FaSignOutAlt size={20} />
            {isExpanded && <span>Log Out</span>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
