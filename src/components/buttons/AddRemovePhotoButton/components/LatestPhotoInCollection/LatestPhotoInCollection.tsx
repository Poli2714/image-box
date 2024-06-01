import { ImageIcon } from 'lucide-react';
import Image from 'next/image';

type LatestPhotoInCollectionProps = {
  numberOfPhotosInCollection: number;
  altDescription: string | undefined;
  photoSrc: string | undefined;
};

function LatestPhotoInCollection({
  numberOfPhotosInCollection,
  altDescription,
  photoSrc,
}: LatestPhotoInCollectionProps) {
  return (
    <div
      className={`relative h-16 w-16 rounded-md ${numberOfPhotosInCollection === 0 ? 'flex items-center justify-center bg-foreground/5' : null}`}
    >
      {numberOfPhotosInCollection > 0 ? (
        <Image
          alt={altDescription as string}
          className='h-16 w-16 rounded-md object-cover object-center'
          height={64}
          src={photoSrc as string}
          width={64}
        />
      ) : (
        <ImageIcon
          className='text-secondary-foreground/50'
          data-testid='image-icon'
          size={24}
          strokeWidth={1.5}
        />
      )}
    </div>
  );
}

export default LatestPhotoInCollection;
