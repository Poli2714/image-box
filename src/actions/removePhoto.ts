'use server';

import { and, eq } from 'drizzle-orm';
import { revalidateTag } from 'next/cache';

import { collectionsToPhotos, photos } from '@/db/schema';
import { db } from '@/db/db';
import { doesPhotoExistInAnotherCollection } from '@/db/handlers';

export const removePhoto = async (collectionId: string, photoId: string) => {
  try {
    await db
      .delete(collectionsToPhotos)
      .where(
        and(
          eq(collectionsToPhotos.collectionId, collectionId),
          eq(collectionsToPhotos.photoId, photoId)
        )
      );
    const isPhotoInDb = await doesPhotoExistInAnotherCollection(photoId);
    if (!isPhotoInDb) {
      await db.delete(photos).where(eq(photos.id, photoId));
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error(String(error));
    }
  }

  revalidateTag('collections_to_photos');
};
