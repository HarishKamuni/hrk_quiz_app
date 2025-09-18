import React from 'react';

const ProgressBar = () => {
    return (
      <div className={`w-full`}>
        <div className="flex justify-between items-center m-2">
          <span className="text-sm font-medium text-gray-700">
            Question Current of Total
          </span>
          <span className="text-sm font-medium text-gray-700">
            Percentage%
          </span>
            </div>
            <div className='w-full bg-gray-200 rounded-full h-3 overflow-hidden'>
                {/* Progress Bar */}
                <div className='bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full transition-all duration-500 ease-out shadow-sm'></div>
            </div>
      </div>
    );
};

export default ProgressBar;
