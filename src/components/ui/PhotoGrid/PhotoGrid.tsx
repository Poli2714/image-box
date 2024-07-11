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
  const numberOfCols = isXLarge ? 4 : isLarge ? 3 : isMedium ? 2 : 1;

  return (
    <ul
      className={`grid h-auto w-full gap-x-4 ${isXLarge ? 'grid-cols-4' : isLarge ? 'grid-cols-3' : isMedium ? 'grid-cols-2' : 'grid-cols-1'}`}
    >
      {Array.from({ length: numberOfCols }).map((_, colIndex) => (
        <div key={colIndex} className='flex h-auto w-full flex-col gap-y-4'>
          {photos.map((_, photoIndex) => {
            const index = colIndex + numberOfCols * photoIndex;
            return index < numberOfPhotos ? (
              <li key={photos[index].id}>
                <PhotoCard
                  photo={photos[index]}
                  base64={base64results[index]}
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
