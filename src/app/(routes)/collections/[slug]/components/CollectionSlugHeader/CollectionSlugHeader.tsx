import { Button } from '@/components/ui';

import { formatDate } from '@/lib/formatDate/formatDate';

type CollectionSlugHeaderProps = {
  collectionName: string;
  createdAt: Date;
};

function CollectionSlugHeader({
  collectionName,
  createdAt,
}: CollectionSlugHeaderProps) {
  const formattedDate = formatDate(createdAt);

  return (
    <header className='grid grid-flow-col grid-cols-[1fr,min-content]'>
      <h1 className='bg-[linear-gradient(to_left,_#F2C593,_#8A3282)] bg-clip-text text-3xl text-transparent lg:text-4xl'>
        {collectionName}
      </h1>
      <Button
        className='col-start-2 row-span-2 place-self-center'
        variant='outline'
      >
        Edit
      </Button>
      <p className='mt-1 text-sm font-light lg:mt-2'>
        Created on {formattedDate}
      </p>
    </header>
  );
}

export default CollectionSlugHeader;
