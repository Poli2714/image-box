import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

import { CollectionSlugHeader, NoPhotosMessage } from './components';
import PhotoGrid from '@/components/ui/PhotoGrid/PhotoGrid';
import SignInAlert from '@/components/ui/SignInAlert/SignInAlert';

import { getAllBase64 } from '@/lib/getBase64';
import { getAPhoto } from '@/lib/getAPhoto';
import { getCollectionInfo } from '@/db/handlers';
import { OptimisticCollectionNameContextProvider } from '@/hooks/OptimisticCollectionNameProvider';
import { OtherCollections } from '../components';
import { Separator } from '@/components/ui/shadcn';

type CollectionPageProps = {
  params: {
    slug: string;
  };
};

export default async function CollectionSlugPage({
  params,
}: CollectionPageProps) {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const [user, isUserSignedIn] = await Promise.all([
    getUser(),
    isAuthenticated(),
  ]);

  if (!isUserSignedIn || !user) {
    return <SignInAlert />;
  }

  const userCollection = await getCollectionInfo(params.slug);
  if (!userCollection) {
    throw new Error('Something went wrong');
  }

  let photoIds: Array<string> = [];
  let photoUrls: Array<string> = [];

  userCollection.collectionsToPhotos.forEach((photoInfo) => {
    photoIds.push(photoInfo.photo.id);
    photoUrls.push(photoInfo.photo.thumb);
  });

  const [photos, base64Results] = await Promise.all([
    Promise.all(photoIds.map((photoId) => getAPhoto(photoId))),
    getAllBase64(photoUrls),
  ]);

  return (
    <>
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
          <Separator />
          <OtherCollections collectionId={params.slug} userId={user.id} />
        </div>
      )}
    </>
  );
}
