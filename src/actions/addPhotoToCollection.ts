'use server';

import { revalidateTag } from 'next/cache';

import { db } from '@/db/db';
import { collectionsToPhotos, photos } from '@/db/schema';
import { doesPhotoExistInAnotherCollection } from '@/db/handlers';

type AddPhotoToCollectionProps = {
  altDescription: string;
  collectionId: string;
  photoId: string;
  slug: string;
  regular: string;
  thumb: string;
};

export const addPhotoToCollection = async ({
  altDescription,
  collectionId,
  photoId,
  slug,
  regular,
  thumb,
}: AddPhotoToCollectionProps) => {
  try {
    const isPhotoInDb = await doesPhotoExistInAnotherCollection(photoId);
    if (!isPhotoInDb) {
      await db.insert(photos).values({
        altDescription,
        id: photoId,
        slug,
        regular,
        thumb,
      });
    }
    await db.insert(collectionsToPhotos).values({
      photoId,
      collectionId,
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error(String(error));
    }
  }

  revalidateTag('collections_to_photos');
};
