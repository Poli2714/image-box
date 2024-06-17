import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

import { AddToCollectionBtn, DownloadLink, PhotoAndTags } from './components';
import { AuthorImageAndName, LatestCollections } from '@/components/ui';

import { formatDate } from '@/lib/formatDate/formatDate';
import { getAPhoto } from '@/lib/getAPhoto';
import { getLatestCollections } from '@/lib/getLatestCollections/getLatestCollections';
import { getUserCollections } from '@/db/handlers';
import { PhotoProvider } from '@/hooks/PhotoIdProvider';
import { UserCollection } from '@/types/collections';

type PhotoSlugPageProps = {
  params: {
    slug: string;
  };
};

export default async function PhotoSlugPage({ params }: PhotoSlugPageProps) {
  let userCollections: Array<UserCollection> = [];
  const { getUser } = getKindeServerSession();
  const [photo, user] = await Promise.all([getAPhoto(params.slug), getUser()]);
  if (user) {
    userCollections = await getUserCollections(user.id);
  }
  const formattedDate = formatDate(photo.created_at);
  const latestCollections = getLatestCollections(userCollections);

  return (
    <div className='grid grid-cols-1 gap-y-6 py-4 xl:grid-cols-2 xl:gap-x-6 xl:gap-y-0'>
      <PhotoAndTags keyword={params.slug} />
      <PhotoProvider
        photoForCollection={{
          altDescription: photo.alt_description,
          id: photo.id,
          slug: photo.slug,
          regular: photo.urls.regular,
          thumb: photo.urls.thumb,
        }}
      >
        <div className='flex flex-col gap-y-4'>
          <div className='flex items-center space-x-2'>
            <AuthorImageAndName
              portfolioUrl={photo.user.portfolio_url}
              socialUrl={photo.user.links.html}
              name={photo.user.name}
              imageUrl={photo.user.profile_image.small}
            />
          </div>
          {formattedDate !== null ? (
            <p className='text-xs font-light'>{`Published on ${formattedDate}`}</p>
          ) : null}
          <div className='mb-4 flex flex-col items-start space-y-4 xs:flex-row xs:space-x-4 xs:space-y-0'>
            <AddToCollectionBtn />
            <DownloadLink link={photo.links.download} />
          </div>
          {!!user && userCollections.length > 0 ? (
            <LatestCollections latestCollections={latestCollections} />
          ) : null}
        </div>
      </PhotoProvider>
    </div>
  );
}
