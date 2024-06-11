import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

import {
  CollectionCard,
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
      <div>
        <ul className='grid grid-cols-[repeat(auto-fit,minmax(clamp(15rem,70dvw,25rem),1fr))] gap-4'>
          {userCollections.map((userCollection) => (
            <li className='flex justify-center' key={userCollection.id}>
              <CollectionCard collection={userCollection} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
