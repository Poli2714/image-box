import { SearchXIcon } from 'lucide-react';

import { SearchPageHeading } from '..';

type NoPhotosFoundProps = {
  keyword: string;
};

function NoPhotosFound({ keyword }: NoPhotosFoundProps) {
  return (
    <>
      <SearchPageHeading slug={keyword} />
      <div className='mt-24 flex flex-col items-center space-y-4'>
        <SearchXIcon
          className='mb-4 text-secondary'
          data-testid='search-icon'
          size={150}
        />
        <p className='text-center font-light'>
          Unfortunately, there are no photos with the requested keyword
        </p>
      </div>
    </>
  );
}

export default NoPhotosFound;
