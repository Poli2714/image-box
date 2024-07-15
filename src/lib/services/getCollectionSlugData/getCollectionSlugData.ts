import { getCollectionInfo } from '@/db/handlers';
import { getAPhoto } from '@/lib/getAPhoto';
import { getAllBase64 } from '@/lib/getBase64';

export async function getCollectionSlugData(slug: string) {
  const userCollection = await getCollectionInfo(slug);

  let photoIds: Array<string> = [];
  let photoUrls: Array<string> = [];

  if (!!userCollection) {
    userCollection.collectionsToPhotos.forEach((photoInfo) => {
      photoIds.push(photoInfo.photo.id);
      photoUrls.push(photoInfo.photo.thumb);
    });
  }

  const [photos, base64Results] = await Promise.all([
    Promise.all(photoIds.map((photoId) => getAPhoto(photoId))),
    getAllBase64(photoUrls),
  ]);

  return {
    base64Results,
    photoIds,
    photos,
    userCollection,
  };
}
