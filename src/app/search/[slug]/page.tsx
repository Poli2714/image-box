import { redirect } from 'next/navigation';

import { PhotoGrid } from '@/components/ui';

import { formatSlug } from '@/lib/formatSlug';
import { getAllBase64 } from '@/lib/getBase64';
import { getPhotos } from '@/lib/getPhotos';
import { SearchPageParams } from '@/types/searchPage';

type SearchKeywordProps = {
  params: SearchPageParams;
};

async function SearchKeyword({ params }: SearchKeywordProps) {
  const formattedSlug = formatSlug(params.slug);

  if (formattedSlug.length === 0) redirect('/search');

  const photos = await getPhotos(formattedSlug);

  const photoUrls = photos.map((photo) => photo.urls.thumb);
  const base64results = await getAllBase64(photoUrls);

  return <PhotoGrid photos={photos} base64results={base64results} />;
}

export default SearchKeyword;
