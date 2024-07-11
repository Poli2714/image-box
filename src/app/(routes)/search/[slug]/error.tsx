'use client';

import { Button } from '@/components/ui';

type SearchSlugErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function SearchSlugErrorPage({
  error,
  reset,
}: SearchSlugErrorPageProps) {
  return (
    <div className='flex flex-col items-center justify-center gap-y-8'>
      <h1 className='text-2xl font-semibold'>{error.message}</h1>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
