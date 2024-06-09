import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { Loader2Icon } from 'lucide-react';
import { Suspense } from 'react';

import { CollectionSlugHeader, NoPhotosMessage } from './components';
import PhotoGrid from '@/components/ui/PhotoGrid/PhotoGrid';
import SignInAlert from '@/components/ui/SignInAlert/SignInAlert';

import { getAllBase64 } from '@/lib/getBase64';
import { getAPhoto } from '@/lib/getAPhoto';
import { getCollectionInfo } from '@/db/handlers';
import { OptimisticCollectionNameContextProvider } from '@/hooks/OptimisticCollectionNameProvider';

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

  if (!userCollection) throw new Error();

  let photoIds: Array<string> = [];
  let photoUrls: Array<string> = [];

  userCollection.collectionsToPhotos.forEach((info) => {
    photoIds.push(info.photo.id);
    photoUrls.push(info.photo.thumb);
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
        <Suspense
          fallback={
            <div className='mt-20 flex items-center justify-center'>
              <Loader2Icon
                strokeWidth={1.5}
                size={64}
                className='animate-spin text-secondary'
              />
            </div>
          }
        >
          <PhotoGrid photos={photos} base64results={base64Results} />
        </Suspense>
      )}
    </>
  );
}
