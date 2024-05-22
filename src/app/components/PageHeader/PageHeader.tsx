import Link from 'next/link';
import { MenuIcon, Search, SunIcon } from 'lucide-react';

import { BrandLogo, Menu, NavItems } from './components';
import { Button } from '@/components/ui';
import { SearchForm } from '@/components/forms';

function PageHeader() {
  return (
    <header className='flex items-center gap-x-2 border-b px-[clamp(1rem,4dvw,2.5rem)] py-4'>
      <Menu>
        <Button size='icon' variant='ghost'>
          <MenuIcon data-testid='menu-icon' strokeWidth={1.25} />
        </Button>
      </Menu>
      <BrandLogo />
      <NavItems />
      <div className='ml-auto flex items-center space-x-2 sm:ml-0'>
        <Button asChild className='lg:hidden' size='icon' variant='ghost'>
          <Link href='/search'>
            <Search
              className='text-secondary-foreground'
              data-testid='search-icon'
              strokeWidth={1.25}
            />
          </Link>
        </Button>
        <SearchForm size='sm' />
        <Button>Sign in</Button>
        <Button size='icon' variant='ghost'>
          <SunIcon data-testid='sun-icon' strokeWidth={1.25} />
        </Button>
      </div>
    </header>
  );
}

export default PageHeader;
