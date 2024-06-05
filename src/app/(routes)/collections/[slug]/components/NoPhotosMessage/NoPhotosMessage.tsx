import { SearchForm } from '@/components/forms';

function NoPhotosMessage() {
  return (
    <div
      className='mt-24 flex flex-col items-center justify-center gap-y-2 text-center'
      data-testid='no-photos-message'
    >
      <h2 className='text-xl font-semibold'>No Photos Yet</h2>
      <p className='text-sm font-light text-secondary-foreground'>
        This collection is currently empty. Start exploring and add your
        favorite photos to make it shine.
      </p>
      <div className='mt-4 w-full max-w-lg'>
        <SearchForm />
      </div>
    </div>
  );
}

export default NoPhotosMessage;
