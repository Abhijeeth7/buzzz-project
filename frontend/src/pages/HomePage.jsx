// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/Banner.png'; // Ensure you have an image in the assets folder

const HomePage = () => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-800 flex flex-col items-center justify-center text-center px-4">
    <div className="mb-8 animate-fadeIn">
      <img src={bannerImage} alt="Banner" className="w-full max-w-xl rounded-lg shadow-lg" />
    </div>
    <h1 className="text-6xl font-extrabold text-white mb-4 animate-bounce">
      Welcome to BuzzZ.com
    </h1>
    <p className="text-xl text-white mb-12">
      Join the buzz and connect with the world in a whole new way.
    </p>
    <div className="space-x-6">
      <Link to="/login" className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full shadow-xl transform transition duration-300 hover:scale-105">
        Login
      </Link>
      <Link to="/register" className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full shadow-xl transform transition duration-300 hover:scale-105">
        Register
      </Link>
    </div>
  </div>
);

export default HomePage;
