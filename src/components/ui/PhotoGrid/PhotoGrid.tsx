import { PhotoCard } from './components';

import { Photo } from '@/types/Images';

type PhotoGridProps = {
  photos: Array<Photo>;
  base84results: Array<string>;
};

function PhotoGrid({ photos, base84results }: PhotoGridProps) {
  return (
    <ul className='grid grid-flow-dense auto-rows-min grid-cols-[repeat(auto-fit,minmax(clamp(20rem,80dvw,25rem),1fr))] gap-6'>
      {photos.map((photo, i) => (
        <li
          className={`${photo.width < photo.height ? 'row-span-2' : null}`}
          key={photo.id}
        >
          <PhotoCard photo={photo} base84={base84results[i]} />
        </li>
      ))}
    </ul>
  );
}

export default PhotoGrid;
