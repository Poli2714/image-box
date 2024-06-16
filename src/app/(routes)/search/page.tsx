import { notFound } from 'next/navigation';

import PhotoGrid from '@/components/ui/PhotoGrid/PhotoGrid';

import { getAllBase64 } from '@/lib/getBase64';
import { getPhotos } from '@/lib/getPhotos';

const query = 'los angeles';

export default async function SearchPage() {
  const result = await getPhotos(query);
  if (result.photos.length === 0) {
    notFound();
  }
  const allPhotoUrls = result.photos.map((photo) => photo.urls.thumb);
  const base64results = await getAllBase64(allPhotoUrls);

  return <PhotoGrid photos={result.photos} base64results={base64results} />;
}
