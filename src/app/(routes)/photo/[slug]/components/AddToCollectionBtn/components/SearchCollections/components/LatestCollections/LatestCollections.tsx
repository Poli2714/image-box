import { AddRemovePhotoButton } from '@/components/buttons';

import { UserCollection } from '@/types/collections';

type LatestCollectionsProps = {
  latestCollections: Array<UserCollection>;
};

function LatestCollections({ latestCollections }: LatestCollectionsProps) {
  return (
    <div className='space-y-3'>
      <h2 className='pl-2'>Latest Collections</h2>
      <ul>
        {latestCollections.map((latestCollection) => (
          <li key={latestCollection.id}>
            <AddRemovePhotoButton userCollection={latestCollection} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LatestCollections;
