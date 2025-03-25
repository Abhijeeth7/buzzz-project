// src/components/PostCard.jsx
import React, { useState } from 'react';

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={post.userProfile} alt="Profile" className="w-8 h-8 rounded-full" />
          <span className="text-gray-800 dark:text-gray-100 font-bold">{post.username}</span>
        </div>
        <button onClick={() => setShowOptions(!showOptions)} className="text-gray-600 dark:text-gray-300 focus:outline-none">
          {/* Options Icon (three dots) */}
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6 10a2 2 0 114 0 2 2 0 01-4 0zm4 0a2 2 0 114 0 2 2 0 01-4 0zm4 0a2 2 0 114 0 2 2 0 01-4 0z" />
          </svg>
        </button>
      </div>
      <div className="mt-4">
        <img src={post.imageUrl} alt="Post" className="w-full rounded-lg" />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex space-x-4">
          <button onClick={() => setLiked(!liked)} className="text-gray-600 dark:text-gray-300">
            {liked ? '❤️' : '🤍'} {/* Like Icon */}
          </button>
          <button className="text-gray-600 dark:text-gray-300">💬</button> {/* Comment Icon */}
          <button className="text-gray-600 dark:text-gray-300">🔄</button> {/* Share Icon */}
          <button className="text-gray-600 dark:text-gray-300">💾</button> {/* Save Icon */}
        </div>
      </div>
      {showOptions && (
        <div className="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
          <button className="block w-full text-left text-sm text-red-600">Report</button>
          <button className="block w-full text-left text-sm text-yellow-600">Block</button>
          <button className="block w-full text-left text-sm text-gray-600">Not Interested</button>
        </div>
      )}
    </div>
  );
};

export default PostCard;
