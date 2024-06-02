import { SearchForm } from '@/components/forms';

function NoCollectionMessage() {
  return (
    <div className=' flex w-full flex-1 flex-col items-center justify-center gap-y-2 px-[clamp(1rem,4dvw,3rem)] text-center'>
      <h1 className='text-xl font-semibold'>No Collections Yet</h1>
      <p className='w-3/4 text-sm font-light text-secondary-foreground'>
        You haven't created any collections yet. Start exploring and add your
        favorite photos to your collections.
      </p>
      <div className='mt-4 w-3/4 max-w-lg'>
        <SearchForm />
      </div>
    </div>
  );
}

export default NoCollectionMessage;
