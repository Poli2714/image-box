import Link from 'next/link';
import { SearchXIcon } from 'lucide-react';

import { Button } from '@/components/ui';

export default function SearchResultNotFound() {
  return (
    <div className='mt-24 flex flex-col items-center space-y-4'>
      <SearchXIcon className='mb-4 text-secondary' size={150} />
      <p className='text-center font-light'>
        Unfortunately, there are no photos with the requested keyword
      </p>
      <Button asChild>
        <Link href='/'>Return Home</Link>
      </Button>
    </div>
  );
}
