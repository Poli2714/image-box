import { getAPhoto } from '@/lib/getAPhoto';
import { UserCollection } from '@/types/collections';
import { getSessionUserInfo } from '../getSessionUserInfo/getSessionUserInfo';
import { formatDate } from '@/lib/formatDate/formatDate';
import { getUserCollections } from '@/db/handlers';
import { getLatestCollections } from '@/lib/getLatestCollections/getLatestCollections';
import { getBase64 } from '@/lib/getBase64';

export async function getPhotoSlugData(slug: string) {
  let userCollections: Array<UserCollection> = [];

  const [photo, { isUserLoggedIn, user, userInitials, userPicture }] =
    await Promise.all([getAPhoto(slug), getSessionUserInfo()]);

  const base64Result = await getBase64(photo.urls.thumb);
  const formattedDate = formatDate(photo.created_at);

  if (user) {
    userCollections = await getUserCollections(user.id);
  }
  const latestCollections = getLatestCollections(userCollections);

  return {
    base64Result,
    formattedDate,
    isUserCollectionEmpty: userCollections.length === 0,
    isUserLoggedIn,
    latestCollections,
    photo,
    userCollections,
    userInitials,
    userPicture,
  };
}
