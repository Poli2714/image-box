import { notFound } from 'next/navigation';

import { MainSectionLayout, PhotoGrid } from '@/components/ui';

import { getSearchHomePagePhotoResults } from '@/lib/services/getSearchHomePagePhotoResults/getSearchHomePagePhotoResults';

export default async function SearchPage() {
  const { photos, base64results } = await getSearchHomePagePhotoResults();

  if (photos.length === 0) {
    notFound();
  }

  return (
    <MainSectionLayout>
      <PhotoGrid photos={photos} base64results={base64results} />
    </MainSectionLayout>
  );
}
