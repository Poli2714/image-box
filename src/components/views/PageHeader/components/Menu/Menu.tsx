import Link from 'next/link';
import { MenuIcon } from 'lucide-react';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui';

function Menu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='mr-2 sm:hidden' size='icon' variant='ghost'>
          <MenuIcon strokeWidth={1.25} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link href='/'>
          <DropdownMenuItem>Home</DropdownMenuItem>
        </Link>
        <Link href='/collections'>
          <DropdownMenuItem>Collections</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Menu;
