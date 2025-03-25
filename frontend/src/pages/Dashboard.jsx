// src/pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import TimeTracker from '../components/TimeTracker';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

// Example post data
const samplePost = {
  userProfile: '/default-profile.png',
  username: 'JohnDoe',
  imageUrl: '/path-to-uploaded-image.jpg'
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
            Welcome to BuzzZ!
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mt-2">
            Discover, connect, and share your moments with the world.
          </p>
        </header>
        
        {/* Recommendations Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Post Pictures Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              Post Pictures
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Share your life moments. Upload your best pictures and get noticed.
            </p>
            <Link to="/post" className="mt-4 inline-block text-indigo-600 dark:text-indigo-400 font-semibold">
              Get Started
            </Link>
          </div>

          {/* Follow Stars Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              Follow Stars
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Connect with top influencers and celebrities. Follow your favorite profiles.
            </p>
            <Link to="/explore" className="mt-4 inline-block text-indigo-600 dark:text-indigo-400 font-semibold">
              Explore Now
            </Link>
          </div>

          {/* Build Networks Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              Build Networks
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Connect with friends and expand your social network.
            </p>
            <Link to="/network" className="mt-4 inline-block text-indigo-600 dark:text-indigo-400 font-semibold">
              Connect
            </Link>
          </div>

          {/* Update Preferences Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              Update Preferences
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Customize your experience by updating your profile settings.
            </p>
            <Link to="/settings" className="mt-4 inline-block text-indigo-600 dark:text-indigo-400 font-semibold">
              Update Now
            </Link>
          </div>
        </section>

        {/* More Recommendations */}
        <section className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
            More Recommendations
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Discover new trends, join groups, and engage with the community.
          </p>
          <Link
            to="/explore"
            className="mt-4 inline-block px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300"
          >
            Explore BuzzZ
          </Link>
        </section>

        {/* Additional Dashboard Components */}
        <section className="mt-12">
          {/* Time Tracker for parental controls */}
          <TimeTracker />

          {/* Post Submission Form */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Your Feed
            </h2>
            <PostForm />
          </div>

          {/* Display a Post with interactive icons */}
          <div className="mt-8">
            <PostCard post={samplePost} />
            {/* Render additional PostCard components as needed */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
