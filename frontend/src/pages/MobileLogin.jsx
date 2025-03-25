// src/pages/MobileLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MobileLogin = () => {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp]       = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = (e) => {
    e.preventDefault();
    console.log('Mobile number:', mobile);
    setOtpSent(true);
  };
  

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    // Verify OTP logic here. If successful:
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        {!otpSent ? (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">Mobile Login</h2>
            <div>
              <label className="block text-gray-700 dark:text-gray-200">Mobile Number</label>
              <input 
                type="tel" 
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Enter your mobile number"
                required
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-200"
            >
              Send OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">Enter OTP</h2>
            <div>
              <label className="block text-gray-700 dark:text-gray-200">OTP</label>
              <input 
                type="text" 
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Enter the OTP"
                required
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-200"
            >
              Verify OTP
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default MobileLogin;
