'use client';

import {
  CircleCheckBigIcon,
  LoaderCircleIcon,
  MinusIcon,
  PlusIcon,
} from 'lucide-react';
import { useState, useTransition } from 'react';

import { Button } from '@/components/ui';
import { CollectionInfo, LatestPhotoInCollection } from './components';

import { addPhotoToCollection } from '@/actions/addPhotoToCollection';
import { removePhoto } from '@/actions/removePhoto';
import { usePhotoContext } from '@/hooks/PhotoIdProvider';
import { UserCollection } from '@/types/collections';

type AddRemovePhotoButtonProps = {
  userCollection: UserCollection;
};

function AddRemovePhotoButton({ userCollection }: AddRemovePhotoButtonProps) {
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
              altDescription: photo.altDescription,
              collectionId: userCollection.id,
              photoId: photo.id,
              slug: photo.slug,
              thumb: photo.thumb,
            })
        );

  return (
    <form action={photoAction} name='add-remove-photo-form'>
      <Button
        className={`relative grid h-auto w-full grid-cols-[min-content,1fr] place-items-start justify-start gap-x-4 p-2 hover:bg-secondary/50 [&_h3]:font-medium ${isPhotoInCollection ? 'bg-secondary/20' : null}`}
        disabled={isPending}
        onMouseOver={() => setIsHoveredOn(true)}
        onMouseLeave={() => setIsHoveredOn(false)}
        type='submit'
        variant={null}
      >
        <LatestPhotoInCollection
          numberOfPhotosInCollection={numberOfPhotos}
          altDescription={
            userCollection.collectionsToPhotos[numberOfPhotos - 1].photo
              ?.altDescription
          }
          photoSrc={
            userCollection.collectionsToPhotos[numberOfPhotos - 1].photo?.thumb
          }
        />
        <CollectionInfo
          numberOfPhotosInCollection={numberOfPhotos}
          collectionName={userCollection.name}
        />
        {isPending ? (
          <LoaderCircleIcon
            size={20}
            className='absolute right-6 animate-spin'
          />
        ) : !isHoveredOn && isPhotoInCollection ? (
          <div className='absolute right-6 flex items-center gap-x-2 text-secondary-foreground'>
            <CircleCheckBigIcon
              className='text-green-500'
              data-testid='circle-check-icon'
              size={16}
            />
          </div>
        ) : null}
        {isHoveredOn ? (
          <div className='absolute right-6 flex items-center gap-x-2 text-secondary-foreground'>
            {isPhotoInCollection ? (
              <>
                <MinusIcon data-testid='minus-icon' size={16} />
                <p className='text-xs font-medium'>Remove</p>
              </>
            ) : (
              <>
                <PlusIcon data-testid='plus-icon' size={16} />
                <p className='text-xs font-medium'>Add to Collection</p>
              </>
            )}
          </div>
        ) : null}
      </Button>
    </form>
  );
}

export default AddRemovePhotoButton;
