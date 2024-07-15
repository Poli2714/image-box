import Image from 'next/image';

import { PhotoTags } from './components';

type PhotoAndTagsProps = {
  altDescription: string;
  base64Result: string;
  isPortrait: boolean;
  photoLink: string;
  photoTags: Array<{ title: string }>;
};

function PhotoAndTags({
  altDescription,
  base64Result,
  isPortrait,
  photoLink,
  photoTags,
}: PhotoAndTagsProps) {
  return (
    <div className='grid h-full auto-rows-min gap-y-6'>
      <div className='flex max-h-[45rem] justify-center'>
        <Image
          alt={altDescription}
          blurDataURL={base64Result}
          className={`h-full w-full rounded-md object-contain object-top`}
          height={isPortrait ? 720 : 450}
          placeholder='blur'
          src={photoLink}
          width={400}
          sizes='(max-width: 1280px) 100dvw, 50dvw'
        />
      </div>
      {photoTags.length > 0 ? <PhotoTags tags={photoTags} /> : null}
    </div>
  );
}

export default PhotoAndTags;
