'use client';

import { PhotoCard } from './components';

import { Photo } from '@/types/Images';
import { useMediaQuery } from '@/hooks/useMediaQuery';

type PhotoGridProps = {
  photos: Array<Photo>;
  base64results: Array<string>;
};

function PhotoGrid({ photos, base64results }: PhotoGridProps) {
  const numberOfPhotos = photos.length;
  const isXLarge = useMediaQuery('(min-width: 1448px)');
  const isLarge = useMediaQuery('(min-width: 1096px');
  const isMedium = useMediaQuery('(min-width: 722px)');
  const colNum = isXLarge ? 4 : isLarge ? 3 : isMedium ? 2 : 1;

  return (
    <ul
      className={`grid h-auto w-full gap-x-6 ${isXLarge ? 'grid-cols-[repeat(4,minmax(clamp(15rem,70dvw,20rem),1fr))]' : isLarge ? 'grid-cols-[repeat(3,minmax(clamp(15rem,70dvw,20rem),1fr))]' : isMedium ? 'grid-cols-[repeat(2,minmax(clamp(15rem,70dvw,20rem),1fr))]' : 'grid-cols-1'}`}
    >
      {Array.from({ length: colNum }).map((_, colIndex) => (
        <div key={colIndex} className='flex h-auto w-full flex-col gap-y-6'>
          {photos.map((_, i) => {
            return colIndex + colNum * i < numberOfPhotos ? (
              <li key={photos[colIndex + colNum * i].id}>
                <PhotoCard
                  photo={photos[colIndex + colNum * i]}
                  base64={base64results[colIndex + colNum * i]}
                />
              </li>
            ) : null;
          })}
        </div>
      ))}
    </ul>
  );
}

export default PhotoGrid;
