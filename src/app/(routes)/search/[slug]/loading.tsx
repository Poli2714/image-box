import { Loader2Icon } from 'lucide-react';
import { Skeleton } from '@/components/ui';

import { createArray } from '@/lib/createArray/createArray';

export default function SearchLoadingPage() {
  const arr = createArray(21);

  return (
    // <ul className='grid grid-cols-[repeat(auto-fit,minmax(clamp(20rem,50dvw,25rem),1fr))] gap-6'>
    //   {arr.map((_, i) => (
    //     <li key={i}>
    //       <Skeleton className='skeletonMd:h-[clamp(16.7rem,30dvw,25.5rem)] skeletonLg:h-[clamp(16.7rem,20dvw,19rem)] h-[clamp(12.75rem,50dvw,32rem)] w-full rounded-md' />
    //     </li>
    //   ))}
    // </ul>
    <div className='mt-10 flex items-center justify-center'>
      <Loader2Icon
        strokeWidth={1.5}
        size={64}
        className='animate-spin text-secondary'
      />
    </div>
  );
}
