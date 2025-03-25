// src/components/SearchBar.jsx
import React, { useState } from 'react';

const sampleRecommendations = ['Trending', 'New Users', 'Tech News', 'Sports', 'Entertainment'];

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 0) {
      const results = sampleRecommendations.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFiltered(results);
    } else {
      setFiltered([]);
    }
  };

  return (
    <div className="relative">
      <input 
        type="text" 
        placeholder="Search BuzzZ.com..."
        value={query}
        onChange={handleChange}
        className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-300"
      />
      {filtered.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded mt-1 z-10">
          {filtered.map((item, index) => (
            <li key={index} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
