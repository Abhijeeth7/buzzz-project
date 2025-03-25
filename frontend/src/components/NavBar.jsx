// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = ({ toggleSidebar, darkMode, toggleDarkMode }) => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md flex items-center justify-between p-4 transition-colors duration-300">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="mr-4 focus:outline-none">
          <svg className="w-8 h-8 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
          </svg>
        </button>
        <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 transition-colors duration-300">
          BuzzZ
        </Link>
      </div>
      <div className="flex-1 mx-4">
        <SearchBar />
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={toggleDarkMode} className="focus:outline-none transition-transform duration-300 hover:scale-110">
          {darkMode ? (
            // Sun icon (improved version)
            <svg className="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 25 25">
              <path d="M9 15a5 5 0 100-10 5 5 0 000 10zm0 3a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm0-16a1 1 0 011-1V1a1 1 0 11-2 0v1a1 1 0 011 1zm8 7a1 1 0 010 2h-1a1 1 0 110-2h1zm-16 0a1 1 0 010 2H1a1 1 0 110-2h1zm12.071 6.071a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zm-8.485 0a1 1 0 010 1.414L5.293 16.5a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zm8.485-8.485a1 1 0 011.414-1.414l.707.707a1 1 0 11-1.414 1.414l-.707-.707zm-8.485 0l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 1.414z" />
            </svg>
          ) : (
            // Moon icon (unchanged)
            <svg className="w-8 h-8 text-gray-800 dark:text-gray-200" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 116.707 2.707a8.001 8.001 0 0010.586 10.586z" />
            </svg>
          )}
        </button>
        <Link to="/profile">
        <img src="profile-candidate.png" alt="Profile" className="w-10 h-9 rounded-full" />

        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
