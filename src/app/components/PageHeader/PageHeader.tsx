import { SunIcon } from 'lucide-react';

import { BrandLogo, NavItems } from './components';
import { Button } from '@/components/ui';

function PageHeader() {
  return (
    <header className='flex items-center justify-between border-b px-10 py-4'>
      <BrandLogo />
      <NavItems />
      <div className='flex items-center space-x-2'>
        <Button size='icon' variant='ghost'>
          <SunIcon data-testid='sun-icon' strokeWidth={1.25} />
        </Button>
        <Button>Sign in</Button>
      </div>
    </header>
  );
}

export default PageHeader;
