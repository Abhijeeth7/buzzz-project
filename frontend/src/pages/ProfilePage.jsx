// src/pages/ProfilePage.jsx
import React from 'react';

const ProfilePage = () => (
  <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center transition-colors duration-300">
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 animate-fadeIn">
        Welcome, [Username]!
      </h2>
      <p className="text-gray-600 dark:text-gray-300 animate-fadeIn">
        This is your profile page. More details and settings coming soon.
      </p>
    </div>
  </div>
);

export default ProfilePage;
