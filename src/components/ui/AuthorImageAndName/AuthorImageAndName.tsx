import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

type AuthorImageAndNameProps = {
  className?: string;
  portfolioUrl: string | null;
  socialUrl: string;
  name: string;
  imageUrl: string;
};

function AuthorImageAndName({
  className,
  portfolioUrl,
  socialUrl,
  name,
  imageUrl,
}: AuthorImageAndNameProps) {
  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <Link href={portfolioUrl ?? socialUrl}>
        <Image
          alt={`${name}'s picture`}
          className='rounded-full'
          src={imageUrl}
          width={40}
          height={40}
        />
      </Link>
      <Link href={portfolioUrl ?? socialUrl} className='text-sm font-light'>
        {name}
      </Link>
    </div>
  );
}

export default AuthorImageAndName;
