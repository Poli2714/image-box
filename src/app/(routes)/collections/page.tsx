import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

import { getUserCollections } from '@/db/handlers';
import { UserCollection } from '@/types/collections';
import { NoCollectionMessage, SignInAlert } from './components';

export default async function CollectionsPage() {
  let userCollections: Array<UserCollection> = [];
  const { isAuthenticated, getUser } = getKindeServerSession();
  const [isUserSignedIn, user] = await Promise.all([
    isAuthenticated(),
    getUser(),
  ]);

  if (user) {
    userCollections = await getUserCollections(user.id);
  }

  if (!isUserSignedIn) {
    return <SignInAlert />;
  }

  if (userCollections.length === 0) {
    return <NoCollectionMessage />;
  }
}
