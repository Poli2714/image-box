type CollectionInfoProps = {
  numberOfPhotosInCollection: number;
  collectionName: string;
};

function CollectionInfo({
  numberOfPhotosInCollection,
  collectionName,
}: CollectionInfoProps) {
  return (
    <div className='flex flex-col items-start justify-center'>
      <h3 className='text-sm'>{collectionName}</h3>
      <p className='text-xs font-light'>
        {numberOfPhotosInCollection === 0
          ? 'No photos yet'
          : numberOfPhotosInCollection === 1
            ? `${numberOfPhotosInCollection} photo`
            : `${numberOfPhotosInCollection} photos`}
      </p>
    </div>
  );
}

export default CollectionInfo;
