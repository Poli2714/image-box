import Link from 'next/link';

import { badgeVariants } from '@/components/ui/badge';

type PhotoTagsProps = {
  tags: Array<{ title: string }>;
};

function PhotoTags({ tags }: PhotoTagsProps) {
  const formattedtags = tags.map((tag) => tag.title.replaceAll(' ', '-'));

  return (
    <ul className='flex flex-wrap gap-x-2 gap-y-1'>
      {tags.map((tag, i) => (
        <li key={i}>
          <Link
            href={`/search/${formattedtags[i]}`}
            className={`${badgeVariants({ variant: 'secondary' })} rounded-md`}
          >
            {tag.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default PhotoTags;
