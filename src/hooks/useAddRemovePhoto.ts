'use client';

import { useState, useTransition } from 'react';

import { addPhotoToCollection } from '@/actions/addPhotoToCollection';
import { removePhoto } from '@/actions/removePhoto';
import { usePhotoContext } from './PhotoIdProvider';
import { UserCollection } from '@/types/collections';

export function useAddRemovePhoto(userCollection: UserCollection) {
  const [isPending, startTransition] = useTransition();
  const [isHoveredOn, setIsHoveredOn] = useState(false);
  const { photo } = usePhotoContext();
  const numberOfPhotos = userCollection.collectionsToPhotos.length;
  const isPhotoInCollection = userCollection.collectionsToPhotos.some(
    (collectionToPhoto) => collectionToPhoto.photo?.id === photo.id
  );

  const photoAction = () =>
    isPhotoInCollection
      ? startTransition(
          async () => await removePhoto(userCollection.id, photo.id)
        )
      : startTransition(
          async () =>
            await addPhotoToCollection({
              altDescription: photo?.altDescription,
              collectionId: userCollection.id,
              photoId: photo?.id,
              slug: photo?.slug,
              regular: photo?.regular,
              thumb: photo?.thumb,
            })
        );

  return {
    isHoveredOn,
    isPending,
    isPhotoInCollection,
    numberOfPhotos,
    photoAction,
    setIsHoveredOn,
  };
}
