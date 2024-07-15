import {
  CollectionSlugHeader,
  NoPhotosMessage,
  OtherCollections,
} from './components';
import { PageHeader } from '@/components/views';
import PhotoGrid from '@/components/ui/PhotoGrid/PhotoGrid';
import SignInAlert from '@/components/ui/SignInAlert/SignInAlert';

import { getCollectionSlugData } from '@/lib/services/getCollectionSlugData/getCollectionSlugData';
import { getSessionUserInfo } from '@/lib/services/getSessionUserInfo/getSessionUserInfo';
import { OptimisticCollectionNameContextProvider } from '@/hooks/OptimisticCollectionNameProvider';

type CollectionPageProps = {
  params: {
    slug: string;
  };
};

export default async function CollectionSlugPage({
  params,
}: CollectionPageProps) {
  const [
    { isUserLoggedIn, user, userInitials, userPicture },
    { base64Results, photoIds, photos, userCollection },
  ] = await Promise.all([
    getSessionUserInfo(),
    getCollectionSlugData(params.slug),
  ]);

  if (!isUserLoggedIn || !user) {
    return <SignInAlert />;
  }

  if (!userCollection) {
    throw new Error('Something went wrong');
  }

  return (
    <>
      <PageHeader
        isUserLoggedIn={isUserLoggedIn}
        userInitials={userInitials}
        userPicture={userPicture}
      />
      <OptimisticCollectionNameContextProvider
        collectionName={{ name: userCollection.name }}
      >
        <CollectionSlugHeader
          collectionId={params.slug}
          createdAt={userCollection.createdAt}
        />
      </OptimisticCollectionNameContextProvider>
      {photoIds.length === 0 ? (
        <NoPhotosMessage />
      ) : (
        <div className='space-y-10'>
          <PhotoGrid photos={photos} base64results={base64Results} />
          <OtherCollections collectionId={params.slug} userId={user.id} />
        </div>
      )}
    </>
  );
}
