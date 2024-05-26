import Image from 'next/image';
import Link from 'next/link';

import { badgeVariants } from '@/components/ui/badge';
import { getAPhoto } from '@/lib/getAPhoto';
import { getBase64 } from '@/lib/getBase64';

type PhotoAndTagsProps = {
  keyword: string;
};

async function PhotoAndTags({ keyword }: PhotoAndTagsProps) {
  const photo = await getAPhoto(keyword);
  const base64Result = await getBase64(photo.urls.thumb);
  console.log(photo.urls.thumb);
  const formattedtags = photo.tags.map((tag) => tag.title.replaceAll(' ', '-'));
  const isLandscape =
    photo.width > photo.height || photo.width === photo.height;

  return (
    <div className='grid h-full auto-rows-min gap-y-6'>
      <div className='flex max-h-[45rem] justify-center'>
        <Image
          alt={photo.alt_description}
          blurDataURL={base64Result}
          className={`h-full w-full rounded-md object-contain object-top`}
          height={isLandscape ? 200 : 500}
          placeholder='blur'
          src={photo.urls.regular}
          width={400}
        />
      </div>
      <ul className='flex flex-wrap gap-x-2 gap-y-1'>
        {photo.tags.map((tag, i) => (
          <li key={i}>
            <Link
              href={`/search/${formattedtags[i]}`}
              className={badgeVariants({ variant: 'secondary' })}
            >
              {tag.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhotoAndTags;
