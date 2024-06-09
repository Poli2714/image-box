import { CollectionName, EditCollectionBtn } from './components';

import { formatDate } from '@/lib/formatDate/formatDate';

type CollectionSlugHeaderProps = {
  collectionId: string;
  createdAt: Date;
};

function CollectionSlugHeader({
  collectionId,
  createdAt,
}: CollectionSlugHeaderProps) {
  const formattedDate = formatDate(createdAt);

  return (
    <header className='grid grid-flow-col grid-cols-[1fr,min-content]'>
      <CollectionName />
      <EditCollectionBtn collectionId={collectionId} />
      <p className='mt-1 text-sm font-light lg:mt-2'>
        Created on {formattedDate}
      </p>
    </header>
  );
}

export default CollectionSlugHeader;
