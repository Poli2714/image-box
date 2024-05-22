import Link from 'next/link';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui';

type MenuProps = {
  children: React.ReactElement;
};

function Menu({ children }: MenuProps) {
  return (
    <div data-testid='nav-menu' className='mr-2 sm:hidden'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
        <DropdownMenuContent>
          <Link href='/'>
            <DropdownMenuItem>Home</DropdownMenuItem>
          </Link>
          <Link href='/collections'>
            <DropdownMenuItem>Collections</DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Menu;
