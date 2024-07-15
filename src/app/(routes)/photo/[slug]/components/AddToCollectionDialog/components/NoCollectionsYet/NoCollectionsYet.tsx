function NoCollectionsYet() {
  return (
    <div className='flex flex-col gap-y-4 py-6 text-center text-secondary-foreground'>
      <h2>No Collections Yet</h2>
      <p className='text-sm font-light'>
        You don&apos;t have any collections yet. Start a new collection to add
        and organize your beautiful photos.
      </p>
    </div>
  );
}

export default NoCollectionsYet;
