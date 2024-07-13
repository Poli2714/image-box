import Link from 'next/link';
import { SearchIcon } from 'lucide-react';

import { Button } from '@/components/ui';

function SearchIconLink() {
  return (
    <Button asChild className='lg:hidden' size='icon' variant='ghost'>
      <Link href='/search'>
        <SearchIcon className='text-secondary-foreground' strokeWidth={1.25} />
      </Link>
    </Button>
  );
}

export default SearchIconLink;
