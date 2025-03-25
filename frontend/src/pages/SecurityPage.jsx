// src/pages/SecurityPage.jsx
import React from 'react';

const SecurityPage = () => (
  <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 animate-fadeIn">
        Security
      </h2>
      <p className="text-gray-600 dark:text-gray-300 animate-fadeIn">
        Manage your account security, including two-factor authentication and password management.
      </p>
    </div>
  </div>
);

export default SecurityPage;
