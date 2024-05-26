import { SearchXIcon } from 'lucide-react';

import { ReturnHome } from '@/components/ui';

export default function SearchResultNotFound() {
  return (
    <div className='mt-24 flex flex-col items-center space-y-4'>
      <SearchXIcon className='mb-4 text-secondary' size={150} />
      <p className='text-center font-light'>
        Unfortunately, there are no photos with the requested keyword
      </p>
      <ReturnHome />
    </div>
  );
}
