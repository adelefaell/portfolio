'use client';

import { useRouter } from 'next/navigation';

type ShinyButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
};
export const ShinyButton: React.FC<ShinyButtonProps> = ({
  children,
  disabled,
}) => {
  const router = useRouter();
  return (
    <div className="relative inline-flex group cursor-default">
      <div className=" absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt" />
      <button
        title="Press to Get a New Joke"
        onClick={() => {
          router.refresh();
          setTimeout(() => {
            window.location.reload(); // Fallback to a hard reload
          }, 200); // Optional: Add a delay to allow Next.js refresh to execute
        }}
        className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl"
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};
