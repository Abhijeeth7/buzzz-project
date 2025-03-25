// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-800 shadow transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50`}>
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Menu</h2>
        <button onClick={toggleSidebar} className="mt-2 text-sm text-gray-600 dark:text-gray-300">Close</button>
      </div>
      <ul className="p-4 space-y-4">
        <li><Link to="/settings" onClick={toggleSidebar} className="block text-gray-700 dark:text-gray-300">Settings</Link></li>
        <li><Link to="/about" onClick={toggleSidebar} className="block text-gray-700 dark:text-gray-300">About</Link></li>
        <li><Link to="/security" onClick={toggleSidebar} className="block text-gray-700 dark:text-gray-300">Security</Link></li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
