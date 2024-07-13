import { LoginLink } from '@kinde-oss/kinde-auth-nextjs/components';

import {
  BrandLogo,
  Menu,
  NavItems,
  SearchIconLink,
  ThemeToggle,
  UserProfile,
} from './components';
import { Button } from '@/components/ui';
import { SearchForm } from '@/components/forms';

type PageHeaderProps = {
  isUserLoggedIn: boolean;
  userInitials: string;
  userPicture: string | undefined;
};

function PageHeader({
  isUserLoggedIn,
  userInitials,
  userPicture,
}: PageHeaderProps) {
  return (
    <header className='flex items-center gap-x-2 border-b px-[clamp(1rem,4dvw,2.5rem)] py-4'>
      <Menu />
      <BrandLogo />
      <NavItems />
      <div className='ml-auto flex items-center space-x-2 sm:ml-0'>
        <SearchIconLink />
        <SearchForm size='sm' />
        {isUserLoggedIn ? (
          <UserProfile userInitials={userInitials} userPicture={userPicture} />
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
