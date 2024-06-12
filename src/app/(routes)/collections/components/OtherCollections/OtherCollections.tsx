import { CollectionCard } from '..';

import { getUserCollections } from '@/db/handlers';

type OtherCollectionsProps = {
  collectionId: string;
  userId: string;
};

async function OtherCollections({
  collectionId,
  userId,
}: OtherCollectionsProps) {
  const userCollections = await getUserCollections(userId);
  const filteredCollections = userCollections.filter(
    (collection) => collection.id !== collectionId
  );

  return filteredCollections.length > 0 ? (
    <div className='space-y-8'>
      <h2 className='text-2xl'>Other Collections</h2>
      <ul className='grid grid-cols-[repeat(auto-fit,minmax(clamp(15rem,70dvw,25rem),1fr))] gap-4'>
        {filteredCollections.map((collection) => (
          <li className='flex justify-center lg:block' key={collection.id}>
            <CollectionCard collection={collection} />
          </li>
        ))}
      </ul>
    </div>
  ) : null;
}

export default OtherCollections;
