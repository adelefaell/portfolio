import LoadingSpinner from '@/app/_components/LoadingSpinner';

/**
 * Loading indicator for the Projects page.
 * @returns {JSX.Element} The rendered loading spinner.
 */
export default function Loading(): JSX.Element {
  return (
    <div className="flex items-center justify-center h-[50dvh]">
      <LoadingSpinner />
    </div>
  );
}
