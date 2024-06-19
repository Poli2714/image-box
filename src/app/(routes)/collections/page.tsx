import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

import {
  CollectionGrid,
  CollectionsHeader,
  NoCollectionMessage,
} from './components';
import SignInAlert from '@/components/ui/SignInAlert/SignInAlert';

import { getUserCollections } from '@/db/handlers';

export default async function CollectionsPage() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const [isUserSignedIn, user] = await Promise.all([
    isAuthenticated(),
    getUser(),
  ]);

  if (!isUserSignedIn || !user) {
    return <SignInAlert />;
  }

  const userCollections = await getUserCollections(user.id);
  if (userCollections.length === 0) {
    return <NoCollectionMessage />;
  }

  return (
    <>
      <CollectionsHeader />
      <CollectionGrid userCollections={userCollections} />
    </>
  );
}
