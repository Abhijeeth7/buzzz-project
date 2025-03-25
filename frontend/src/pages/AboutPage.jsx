// src/pages/AboutPage.jsx
import React from 'react';

const AboutPage = () => (
  <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 animate-fadeIn">
        About BuzzZ.com
      </h2>
      <p className="text-gray-600 dark:text-gray-300 animate-fadeIn">
        BuzzZ.com is a revolutionary social media platform where creativity meets community.
      </p>
    </div>
  </div>
);

export default AboutPage;
