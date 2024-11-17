'use client';

// src/components/ScrollProgressBar.js
import React, { useEffect, useState } from 'react';

/**
 * A progress bar that shows how far the user has scrolled down the page.
 * The bar is rendered as a fixed position element at the top of the page.
 * The width of the bar is determined by the percentage of the page that the user has scrolled.
 */
const ScrollProgressBar = (): JSX.Element => {
  const [scrollWidth, setScrollWidth] = useState<number>(0);

  useEffect((): (() => void) => {
    let animationFrameId: number | null;

    const handleScroll = (): void => {
      // Use requestAnimationFrame for smoother updates
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = window.requestAnimationFrame(() => {
        const { scrollTop, scrollHeight, clientHeight } =
          document.documentElement;
        const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScrollWidth(scrolled);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-primary-color-400 dark:bg-primary-color-500 z-[1000] transition-[width] transition-none duration-200 ease-out"
      style={{ width: `${scrollWidth}%` }}
    />
  );
};

export default ScrollProgressBar;
