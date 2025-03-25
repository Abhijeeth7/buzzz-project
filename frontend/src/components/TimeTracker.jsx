// src/components/TimeTracker.jsx
import React, { useEffect, useState } from 'react';

const TimeTracker = () => {
  const [timeSpent, setTimeSpent] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const intervalId = setInterval(() => {
      const secondsElapsed = Math.floor((Date.now() - startTime) / 1000);
      console.log('Time spent:', secondsElapsed);
      setTimeSpent(secondsElapsed);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  

  return (
    <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded">
      <p className="text-gray-800 dark:text-gray-200">
        Time spent on BuzzZ: {timeSpent} seconds
      </p>
    </div>
  );
};

export default TimeTracker;
