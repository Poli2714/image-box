import { notFound } from 'next/navigation';

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
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error(String(error));
    }
  }
};

export const getCollectionInfo = async (collectionId: string) => {
  try {
    const userCollection = await db.query.collections.findFirst({
      columns: {
        name: true,
        createdAt: true,
      },
      with: {
        collectionsToPhotos: {
          columns: {
            photoId: false,
            collectionId: false,
          },
          with: {
            photo: {
              columns: {
                id: true,
                thumb: true,
              },
            },
          },
        },
      },
      where: (collections, { eq }) => eq(collections.id, collectionId),
    });

    return userCollection;
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.startsWith('invalid input syntax for type uuid')) {
        return notFound();
      } else {
        throw new Error(error.message);
      }
    } else {
      throw new Error(String(error));
    }
  }
};

export const doesPhotoExistInAnotherCollection = async (photoId: string) => {
  const response = await db.query.collectionsToPhotos.findFirst({
    where: (collectionsToPhotos, { eq }) =>
      eq(collectionsToPhotos.photoId, photoId),
  });

  return !!response;
};
