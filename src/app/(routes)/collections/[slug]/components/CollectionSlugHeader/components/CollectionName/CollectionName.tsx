'use client';

import { useOptimisticCollectionNameContext } from '@/hooks/OptimisticCollectionNameProvider';

function CollectionName() {
  const { optimisticCollectionName } = useOptimisticCollectionNameContext();

  return (
    <h1 className='bg-[linear-gradient(to_left,_#F2C593,_#8A3282)] bg-clip-text text-3xl text-transparent lg:text-4xl'>
      {optimisticCollectionName.name}
    </h1>
  );
}

export default CollectionName;
