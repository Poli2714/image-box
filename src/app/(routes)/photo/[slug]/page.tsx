import {
  AddToCollectionDialog,
  DownloadLink,
  PhotoAndTags,
} from './components';
import {
  AuthorImageAndName,
  LatestCollections,
  MainSectionLayout,
} from '@/components/ui';
import { PageHeader } from '@/components/views';

import { getPhotoSlugData } from '@/lib/services/getPhotoSlugData/getPhotoSlugData';
import { PhotoProvider } from '@/hooks/PhotoIdProvider';

type PhotoSlugPageProps = {
  params: {
    slug: string;
  };
};

export default async function PhotoSlugPage({ params }: PhotoSlugPageProps) {
  const {
    base64Result,
    formattedDate,
    isUserCollectionEmpty,
    isUserLoggedIn,
    latestCollections,
    photo,
    userCollections,
    userInitials,
    userPicture,
  } = await getPhotoSlugData(params.slug);

  return (
    <>
      <PageHeader
        isUserLoggedIn={isUserLoggedIn}
        userInitials={userInitials}
        userPicture={userPicture}
      />
      <MainSectionLayout className='grid grid-cols-1 gap-y-6 px-[clamp(0.5rem,2dvw,2rem)] py-12 xl:grid-cols-2 xl:gap-x-6 xl:gap-y-0'>
        <PhotoAndTags
          altDescription={photo.alt_description}
          base64Result={base64Result}
          isPortrait={photo.width < photo.height}
          photoLink={photo.urls.regular}
          photoTags={photo.tags}
        />
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
            <AuthorImageAndName
              portfolioUrl={photo.user.portfolio_url}
              socialUrl={photo.user.links.html}
              name={photo.user.name}
              imageUrl={photo.user.profile_image.small}
            />
            {formattedDate !== null ? (
              <p className='text-xs font-light'>{`Published on ${formattedDate}`}</p>
            ) : null}
            <div className='mb-4 flex flex-col items-start space-y-4 xs:flex-row xs:space-x-4 xs:space-y-0'>
              <AddToCollectionDialog
                isUserLoggedIn={isUserLoggedIn}
                userCollections={userCollections}
              />
              <DownloadLink link={photo.links.download} />
            </div>
            {isUserLoggedIn || !isUserCollectionEmpty ? (
              <LatestCollections latestCollections={latestCollections} />
            ) : null}
          </div>
        </PhotoProvider>
      </MainSectionLayout>
    </>
  );
}
