import React from 'react';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <main
        id="skip"
        className="flex flex-col justify-center bg-gray-50 px-8 dark:bg-gray-900"
      >
        {children}
      </main>
    </div>
  );
};

export default Container;
