import { Skeleton } from '@/components/ui';

import { createArray } from '@/lib/createArray/createArray';

const arr = createArray(21);

export default function SearchLoadingPage() {
  return (
    <ul className='grid grid-cols-[repeat(auto-fit,minmax(clamp(20rem,50dvw,25rem),1fr))] gap-6'>
      {arr.map((_, i) => (
        <li key={i}>
          <Skeleton className='skeletonMd:h-[clamp(16.7rem,30dvw,25.5rem)] skeletonLg:h-[clamp(16.7rem,20dvw,19rem)] h-[clamp(12.75rem,50dvw,32rem)] w-full rounded-md' />
        </li>
      ))}
    </ul>
  );
}
