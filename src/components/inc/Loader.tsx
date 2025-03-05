import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
      <div className="text-center">
        <div className="flex justify-center space-x-2 mb-4">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce delay-200"></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce delay-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;