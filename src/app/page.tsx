import { PageHeader } from '@/components/views';
import { PageHero } from './components';

import { getSessionUserInfo } from '@/lib/services/getSessionUserInfo/getSessionUserInfo';

export default async function HomePage() {
  const { isUserLoggedIn, userInitials, userPicture } =
    await getSessionUserInfo();

  return (
    <>
      <PageHeader
        isUserLoggedIn={isUserLoggedIn}
        userInitials={userInitials}
        userPicture={userPicture}
      />
      <PageHero />;
    </>
  );
}
