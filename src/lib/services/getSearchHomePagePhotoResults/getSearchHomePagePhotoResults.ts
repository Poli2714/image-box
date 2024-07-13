import { getAllBase64 } from '@/lib/getBase64';
import { getPhotos } from '@/lib/getPhotos';

const QUERY = 'los angeles';

export async function getSearchHomePagePhotoResults() {
  const result = await getPhotos(QUERY);

  const allPhotoUrls = result.photos.map((photo) => photo.urls.thumb);
  const base64results = await getAllBase64(allPhotoUrls);

  return { photos: result.photos, base64results };
}
