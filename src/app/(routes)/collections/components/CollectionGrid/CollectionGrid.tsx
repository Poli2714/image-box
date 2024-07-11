import { CollectionCard } from './components';

import { UserCollection } from '@/types/collections';

type CollectionGridProps = {
  userCollections: Array<UserCollection>;
};

function CollectionGrid({ userCollections }: CollectionGridProps) {
  return (
    <ul className='grid grid-cols-[repeat(auto-fit,minmax(clamp(15rem,70dvw,20rem),1fr))] gap-4'>
      {userCollections.map((userCollection) => (
        <li
          className='flex justify-center md:justify-normal'
          key={userCollection.id}
        >
          <CollectionCard collection={userCollection} />
        </li>
      ))}
    </ul>
  );
}

export default CollectionGrid;
