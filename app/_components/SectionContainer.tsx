import React from 'react';

/**
 * Props for the SectionContainer component.
 */
interface SectionContainerProps {
  children: React.ReactNode;
}

/**
 * Container component for section layout with max width and padding.
 * @param {SectionContainerProps} props - The children to render inside the container.
 * @returns {JSX.Element} The rendered section container.
 */
export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
}): JSX.Element => {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      {children}
    </div>
  );
};
