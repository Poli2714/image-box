import { PageHeader } from '@/components/views';
import { SearchBar } from './components';

import { getSessionUserInfo } from '@/lib/services/getSessionUserInfo/getSessionUserInfo';

type SearchLayoutProps = {
  children: React.ReactNode;
};

export default async function SearchLayout({ children }: SearchLayoutProps) {
  const { isUserLoggedIn, userInitials, userPicture } =
    await getSessionUserInfo();

  return (
    <>
      <PageHeader
        isUserLoggedIn={isUserLoggedIn}
        userInitials={userInitials}
        userPicture={userPicture}
      />
      <SearchBar />
      {children}
    </>
  );
}
