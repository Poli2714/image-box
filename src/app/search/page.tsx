import { notFound } from 'next/navigation';

import { PhotoGrid } from '@/components/ui';

import { getAllBase64 } from '@/lib/getBase84';
import { getPhotos } from '@/lib/getPhotos';

const query = 'Baku';

export default async function SearchPage() {
  const photos = await getPhotos(query);
  if (!photos) {
    notFound();
  }
  const allPhotoUrls = photos.map((photo) => photo.urls.thumb);
  const base84results = await getAllBase64(allPhotoUrls);

  return <PhotoGrid photos={photos} base84results={base84results} />;
}
