// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-white shadow-md">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-indigo-600">BuzzZ</Link>
      <nav className="space-x-4">
        <Link to="/login" className="text-gray-600 hover:text-indigo-600">Login</Link>
        <Link to="/register" className="text-gray-600 hover:text-indigo-600">Register</Link>
      </nav>
    </div>
  </header>
);

export default Header;
