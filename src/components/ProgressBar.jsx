import React from 'react';

const ProgressBar = ({ current, total, className = '' }) => {
  const percentage = Math.round((current / total) * 100);
  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center m-2">
        <span className="text-sm font-medium text-gray-700">
          Question {current} of {total}
        </span>
        <span className="text-sm font-medium text-gray-700">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        {/* Progress Bar */}
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full transition-all duration-500 ease-out shadow-sm"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      {/* break */}
    </div>
  );
};

export default ProgressBar;
