import { ImageIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { UserCollection } from '@/types/collections';

type CollectionCardProps = {
  collection: UserCollection;
};

function CollectionCard({ collection }: CollectionCardProps) {
  const numberOfPhotos = collection.collectionsToPhotos.length;

  return (
    <div className='flex w-full max-w-80 flex-col gap-y-2'>
      {numberOfPhotos === 0 ? (
        <Link
          className='hover:opacity-85'
          href={`/collections/${collection.id}`}
        >
          <div className='flex h-48 w-full items-center justify-center rounded-md border border-foreground/20'>
            <ImageIcon
              className='text-foreground/20'
              strokeWidth={0.5}
              size={100}
            />
          </div>
        </Link>
      ) : (
        <Link
          className='hover:opacity-85'
          href={`/collections/${collection.id}`}
        >
          <div
            className={`grid h-48 w-full ${numberOfPhotos === 2 ? 'grid-cols-2' : numberOfPhotos > 2 ? 'grid-cols-[3fr_1fr]' : null} ${numberOfPhotos > 1 ? 'gap-0.5' : null}`}
          >
            <div className='relative'>
              <Image
                alt={collection.collectionsToPhotos[0]?.photo?.altDescription}
                className={`h-auto w-auto ${numberOfPhotos === 1 ? 'rounded-md' : 'rounded-s-md'} object-cover`}
                src={collection.collectionsToPhotos[0]?.photo.regular}
                fill
                sizes={
                  numberOfPhotos === 2
                    ? '160px'
                    : numberOfPhotos > 2
                      ? '240px'
                      : '320px'
                }
              />
            </div>
            {numberOfPhotos > 1 ? (
              <div
                className={`grid max-h-48 ${numberOfPhotos > 2 ? 'grid-rows-2' : null} gap-0.5`}
              >
                <div className='relative'>
                  <Image
                    alt={
                      collection.collectionsToPhotos[1]?.photo?.altDescription
                    }
                    className={`h-auto w-auto ${numberOfPhotos > 2 ? 'rounded-tr-md' : 'rounded-e-md'} object-cover`}
                    src={collection.collectionsToPhotos[1]?.photo.regular}
                    fill
                    sizes={numberOfPhotos > 2 ? '80px' : '160px'}
                  />
                </div>
                {numberOfPhotos > 2 ? (
                  <div className='relative'>
                    <Image
                      alt={
                        collection.collectionsToPhotos[2]?.photo?.altDescription
                      }
                      className='h-auto w-auto rounded-br-md object-cover'
                      src={collection.collectionsToPhotos[2]?.photo.regular}
                      fill
                      sizes='80px'
                    />
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </Link>
      )}
      <div>
        <h2>{collection.name}</h2>
        <p className='text-sm font-light'>{`${numberOfPhotos} ${numberOfPhotos <= 1 ? 'photo' : 'photos'}`}</p>
      </div>
    </div>
  );
}

export default CollectionCard;
