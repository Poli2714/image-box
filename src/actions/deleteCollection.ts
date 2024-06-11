'use server';

import { and, eq, inArray, notInArray } from 'drizzle-orm';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

import { collections, collectionsToPhotos, photos } from '@/db/schema';
import { db } from '@/db/db';

export const deleteCollection = async (collectionId: string) => {
  const { getUser } = getKindeServerSession();

  try {
    const [user, photosInDeletedCollection] = await Promise.all([
      getUser(),
      db.query.collectionsToPhotos.findMany({
        where: (collectionsToPhotos, { eq }) =>
          eq(collectionsToPhotos.collectionId, collectionId),
      }),
    ]);
    if (!user) {
      throw new Error('User not found');
    }

    if (photosInDeletedCollection.length === 0) {
      await db.delete(collections).where(eq(collections.id, collectionId));
    } else {
      const [deletedCollectionPhotos, allUserCollectionPhotos] =
        await Promise.all([
          db
            .delete(collectionsToPhotos)
            .where(eq(collectionsToPhotos.collectionId, collectionId))
            .returning({
              id: collectionsToPhotos.photoId,
            }),
          db.query.collections
            .findMany({
              columns: {
                id: true,
              },
              where: (collections, { and, eq, ne }) =>
                and(
                  ne(collections.id, collectionId),
                  eq(collections.userId, user.id)
                ),
            })
            .then((userCollectionIds) =>
              db.query.collectionsToPhotos.findMany({
                columns: {
                  photoId: true,
                },
                where: (collectionsToPhotos, { inArray }) =>
                  inArray(
                    collectionsToPhotos.collectionId,
                    userCollectionIds.map(
                      (userCollectionId) => userCollectionId.id
                    )
                  ),
              })
            ),
        ]);
      await Promise.all([
        db.delete(photos).where(
          and(
            inArray(
              photos.id,
              deletedCollectionPhotos.map(
                (deletedCollectionPhoto) => deletedCollectionPhoto.id
              )
            ),
            notInArray(
              photos.id,
              allUserCollectionPhotos.map(
                (userCollection) => userCollection.photoId
              )
            )
          )
        ),
        db.delete(collections).where(eq(collections.id, collectionId)),
      ]);
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error(String(error));
    }
  }

  redirect('/collections');
};
