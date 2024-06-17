import Link from 'next/link';
import { LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { MenuIcon, Search } from 'lucide-react';

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

import { BrandLogo, Menu, NavItems, ThemeToggle } from './components';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui';
import { SearchForm } from '@/components/forms';
import { getUserInitials } from '@/lib/getUserInitials/getUserInitials';

async function PageHeader() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  const user = await getUser();
  const userInitials = getUserInitials(user?.given_name, user?.family_name);

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
        {(await isAuthenticated()) ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src={user?.picture as string} />
                <AvatarFallback className='font-light'>
                  {userInitials}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Button className='h-auto p-0' variant={null}>
                  <LogoutLink>Sign out</LogoutLink>
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button asChild>
            <LoginLink>Sign in</LoginLink>
          </Button>
        )}
        <ThemeToggle />
      </div>
    </header>
  );
}

export default PageHeader;
