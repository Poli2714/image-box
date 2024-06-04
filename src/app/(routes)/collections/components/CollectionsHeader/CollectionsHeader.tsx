import Link from 'next/link';

function CollectionsHeader() {
  return (
    <header className='flex flex-col items-center gap-y-3 text-center'>
      <h1 className='bg-[linear-gradient(to_right,_#F2C593,_#8A3282)] bg-clip-text text-[2.5rem] leading-10 text-transparent'>
        Collections
      </h1>
      <p className='max-w-96 font-light'>
        Explore the world through collections of beautiful photos free to use
        under the{' '}
        <Link
          className='font-semibold underline'
          href='https://unsplash.com/license'
        >
          Unsplash License
        </Link>
        .
      </p>
    </header>
  );
}

export default CollectionsHeader;
