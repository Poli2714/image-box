import Image from 'next/image';
import Link from 'next/link';

type AuthorImageAndNameProps = {
  portfolioUrl: string | null;
  socialUrl: string;
  name: string;
  imageUrl: string;
};

function AuthorImageAndName({
  portfolioUrl,
  socialUrl,
  name,
  imageUrl,
}: AuthorImageAndNameProps) {
  return (
    <>
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
    </>
  );
}

export default AuthorImageAndName;
