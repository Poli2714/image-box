'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { AuthorImageAndName, Button } from '@/components/ui';

import { Photo } from '@/types/Images';

type PhotoCardProps = {
  photo: Photo;
  base64: string;
};

function PhotoCard({ photo, base64 }: PhotoCardProps) {
  const [isHoveredOn, setIsHoveredOn] = useState(false);

  const heigth = photo.height > photo.width ? 400 : 225;

  return (
    <div
      className='relative h-auto w-full max-w-full rounded-md bg-foreground dark:bg-background'
      data-testid='photo-card'
      onMouseEnter={() => setIsHoveredOn(true)}
      onMouseLeave={() => setIsHoveredOn(false)}
    >
      <Link className='rounded-md hover:opacity-70' href={`/photo/${photo.id}`}>
        <Image
          className='h-auto w-full rounded-md'
          alt={photo.alt_description}
          src={photo.urls.regular}
          width={300}
          height={heigth}
          sizes='(min-width: 722px) 50dvw, (min-width: 1096px) 33dvw, (max-width: 1448px) 25dvw, 100dvw'
          placeholder='blur'
          blurDataURL={base64}
        />
      </Link>
      {!!isHoveredOn ? (
        <>
          <div className='absolute bottom-4 left-4 flex items-center space-x-2 hover:text-background [&>a:last-child]:text-secondary/90 hover:[&>a:last-child]:text-background dark:[&>a:last-child]:text-foreground/75 dark:hover:[&>a:last-child]:text-foreground'>
            <AuthorImageAndName
              portfolioUrl={photo.user.portfolio_url}
              socialUrl={photo.user.links.html}
              name={photo.user.name}
              imageUrl={photo.user.profile_image.small}
            />
          </div>
          <Button
            asChild
            className='absolute bottom-4 right-4 bg-background text-foreground hover:bg-background dark:bg-foreground dark:text-background'
          >
            <Link href={photo.links.download}>Download</Link>
          </Button>
        </>
      ) : null}
    </div>
  );
}

export default PhotoCard;
