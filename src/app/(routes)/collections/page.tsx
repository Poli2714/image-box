import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

import { getUserCollections } from '@/db/handlers';
import { UserCollection } from '@/types/collections';
import {
  CollectionCard,
  CollectionsHeader,
  NoCollectionMessage,
  SignInAlert,
} from './components';
import Link from 'next/link';

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

  return (
    <main className='space-y-12 px-[clamp(1rem,4dvw,3rem)] py-10 2xl:container'>
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
    </main>
  );
}
