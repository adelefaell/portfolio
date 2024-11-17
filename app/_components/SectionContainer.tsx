import React from 'react';

export const SectionContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      {children}
    </div>
  );
};
