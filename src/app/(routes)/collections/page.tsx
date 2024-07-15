import {
  CollectionGrid,
  CollectionsHeader,
  NoCollectionMessage,
} from './components';
import { PageHeader } from '@/components/views';
import SignInAlert from '@/components/ui/SignInAlert/SignInAlert';

import { getSessionUserInfo } from '@/lib/services/getSessionUserInfo/getSessionUserInfo';
import { getUserCollections } from '@/db/handlers';

export default async function CollectionsPage() {
  const { isUserLoggedIn, user, userInitials, userPicture } =
    await getSessionUserInfo();

  if (!isUserLoggedIn || !user) {
    return <SignInAlert />;
  }

  const userCollections = await getUserCollections(user.id);
  if (userCollections.length === 0) {
    return <NoCollectionMessage />;
  }

  return (
    <>
      <PageHeader
        isUserLoggedIn={isUserLoggedIn}
        userInitials={userInitials}
        userPicture={userPicture}
      />
      <CollectionsHeader />
      <CollectionGrid userCollections={userCollections} />
    </>
  );
}
