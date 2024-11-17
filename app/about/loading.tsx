import LoadingSpinner from '@/app/_components/LoadingSpinner';

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-[50dvh]">
      <LoadingSpinner />
    </div>
  );
}
