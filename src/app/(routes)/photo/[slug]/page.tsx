import {
  AddToCollectionBtn,
  CollectionsToAddRemove,
  DownloadLink,
  PhotoAndTags,
} from './components';
import { AuthorImageAndName } from '@/components/ui';

import { formatDate } from '@/lib/formatDate/formatDate';
import { getAPhoto } from '@/lib/getAPhoto';

type PhotoSlugPageProps = {
  params: {
    slug: string;
  };
};

export default async function PhotoSlugPage({ params }: PhotoSlugPageProps) {
  const photo = await getAPhoto(params.slug);
  const formattedDate = formatDate(photo.created_at);

  return (
    <div className='grid grid-cols-1 gap-y-6 py-4 xl:grid-cols-2 xl:gap-x-6 xl:gap-y-0'>
      <PhotoAndTags keyword={params.slug} />
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
        <div className='flex flex-col items-start space-y-4 xs:flex-row xs:space-x-4 xs:space-y-0'>
          <AddToCollectionBtn />
          <DownloadLink link={photo.links.download} />
        </div>
        <CollectionsToAddRemove />
      </div>
    </div>
  );
}
