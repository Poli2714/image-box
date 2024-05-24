'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Photo } from '@/types/Images';
import { Button } from '../../../button';

type PhotoCardProps = {
  photo: Photo;
  base64: string;
};

function PhotoCard({ photo, base64 }: PhotoCardProps) {
  const [isHoveredOn, setIsHoveredOn] = useState(false);

  return (
    <div
      className='relative h-full w-full'
      data-testid='photo-card'
      onMouseEnter={() => setIsHoveredOn(true)}
      onMouseLeave={() => setIsHoveredOn(false)}
    >
      <Image
        className='h-full w-full rounded-md object-cover'
        alt={photo.alt_description}
        src={photo.urls.regular}
        width={400}
        height={300}
        placeholder='blur'
        blurDataURL={base64}
      />
      {!!isHoveredOn ? (
        <>
          <Link
            className='absolute bottom-0 top-0 h-full w-full bg-foreground opacity-40'
            href={`/photo/${photo.id}`}
          ></Link>
          <div className='absolute bottom-4 left-4 flex items-center space-x-2'>
            <Link href={photo.user.portfolio_url ?? photo.user.links.html}>
              <Image
                // Look at it later! Show alt when image is present maybe?
                alt={`${photo.user.name}'s picture`}
                className='rounded-full'
                src={photo.user.profile_image.small}
                width={40}
                height={40}
              />
            </Link>
            <Link
              href={photo.user.portfolio_url ?? photo.user.links.html}
              className='self-center text-sm font-light text-secondary/90 hover:text-background'
            >
              {photo.user.name}
            </Link>
          </div>
          <Button
            asChild
            className='absolute bottom-4 right-4 bg-background text-foreground hover:bg-input'
          >
            <Link href={photo.links.download}>Download</Link>
          </Button>
        </>
      ) : null}
    </div>
  );
}

export default PhotoCard;
