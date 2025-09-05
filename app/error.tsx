"use client"
import { useEffect } from "react" 

/**
 * Error boundary component for catching and displaying errors in the app.
 * @param {{ error: Error & { digest?: string }; reset: () => void }} props - Error object and reset handler.
 * @returns {JSX.Element} The rendered error UI.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}): JSX.Element {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center gap-5 mt-16">
      <h2>Oops... it look like Something went wrong!</h2>

      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="relative px-6 py-3 font-bold text-white rounded-lg group"
      >
        <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0" />
        <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen" />
        <span className="relative">Try again</span>
      </button>
    </div>
  );
}
