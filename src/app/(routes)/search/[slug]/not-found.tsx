import { SearchXIcon } from 'lucide-react';

import { ReturnHome } from '@/components/ui';

export default function SearchResultNotFound() {
  return (
    <div className='mt-20 flex flex-col items-center space-y-4'>
      <SearchXIcon
        className='mb-4 text-secondary'
        data-testid='search-icon'
        size={150}
      />
      <h1 className='text-2xl'>Page Not Found</h1>
      <p className='text-center font-light'>
        The page you are looking for does not exist. Please check the URL for
        any errors or return to the home page to try again.
      </p>
      <ReturnHome />
    </div>
  );
}
