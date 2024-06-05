import { notFound } from 'next/navigation';

import PhotoGrid from '@/components/ui/PhotoGrid/PhotoGrid';

import { getAllBase64 } from '@/lib/getBase64';
import { getPhotos } from '@/lib/getPhotos';

const query = 'los angeles';

export default async function SearchPage() {
  const photos = await getPhotos(query);
  if (!photos) {
    notFound();
  }
  const allPhotoUrls = photos.map((photo) => photo.urls.thumb);
  const base64results = await getAllBase64(allPhotoUrls);

  return <PhotoGrid photos={photos} base64results={base64results} />;
}
