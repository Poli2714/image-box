'use client';

import { MinusIcon } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui';

function CollectionsToAddRemove() {
  const [isHoveredOn, setIsHoveredOn] = useState(false);

  return (
    <div className='mt-4 space-y-2'>
      <h2 className='text-xl font-semibold'>Collections</h2>
      <Button
        className='relative grid h-auto w-full grid-cols-[min-content,1fr] place-items-start justify-start gap-x-4 p-2 hover:bg-secondary [&_h3]:font-medium'
        onMouseOver={() => setIsHoveredOn(true)}
        onMouseLeave={() => setIsHoveredOn(false)}
        variant={null}
      >
        <div className='h-16 w-16 rounded-md bg-foreground'></div>
        <div className='flex flex-col items-start justify-center'>
          <h3 className='text-sm'>Test collection name</h3>
          <p className='text-xs font-light'>15 photos</p>
        </div>
        {isHoveredOn ? (
          <div className='absolute right-6 flex items-center gap-x-2'>
            <MinusIcon data-testid='minus-icon' />
            <p className='text-xs font-medium'>Remove</p>
          </div>
        ) : null}
      </Button>
    </div>
  );
}

export default CollectionsToAddRemove;
