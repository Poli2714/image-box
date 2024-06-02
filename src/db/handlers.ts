import { db } from './db';

export const getUserCollections = async (userId: string) => {
  try {
    const userCollections = await db.query.collections.findMany({
      columns: {
        createdAt: false,
        userId: false,
      },
      with: {
        collectionsToPhotos: {
          columns: {
            photoId: false,
            collectionId: false,
          },
          with: {
            photo: true,
          },
        },
      },
      where: (collections, { eq }) => eq(collections.userId, userId),
      orderBy: (collections, { desc }) => desc(collections.createdAt),
    });
    return userCollections;
  } catch (error) {
    throw new Error('Something went wrong. Please try again');
  }
};

export const doesPhotoExistInAnotherCollection = async (photoId: string) => {
  const response = await db.query.collectionsToPhotos.findFirst({
    where: (collectionsToPhotos, { eq }) =>
      eq(collectionsToPhotos.photoId, photoId),
  });

  return !!response;
};
