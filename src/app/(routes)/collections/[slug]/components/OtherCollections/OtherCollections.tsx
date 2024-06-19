import { CollectionGrid } from '../../../components';

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
      <CollectionGrid userCollections={filteredCollections} />
    </div>
  ) : null;
}

export default OtherCollections;
