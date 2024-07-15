import { AddRemovePhotoButton } from '@/components/buttons';

import { UserCollection } from '@/types/collections';

type CollectionSearchResultsProps = {
  collections: Array<UserCollection>;
};

function CollectionSearchResults({
  collections,
}: CollectionSearchResultsProps) {
  return (
    <div className='space-y-3'>
      <h2 className='pl-2'>Search Results</h2>
      <p className='pl-2 text-xs font-light'>{`${collections.length} ${collections.length <= 1 ? 'match' : 'matches'}`}</p>

      {collections.length > 0 ? (
        <ul>
          {collections.map((collection) => (
            <li key={collection.id}>
              <AddRemovePhotoButton userCollection={collection} />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default CollectionSearchResults;
