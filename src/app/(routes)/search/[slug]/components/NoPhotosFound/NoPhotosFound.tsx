import { SearchXIcon } from 'lucide-react';

import { SearchPageHeading } from '..';
import { MainSectionLayout } from '@/components/ui';

type NoPhotosFoundProps = {
  keyword: string;
};

function NoPhotosFound({ keyword }: NoPhotosFoundProps) {
  return (
    <MainSectionLayout className='flex flex-1 flex-col'>
      <SearchPageHeading className='mb-0' slug={keyword} />
      <div className='flex flex-1 flex-col items-center justify-center space-y-4'>
        <SearchXIcon
          className='mb-4 text-secondary'
          data-testid='search-icon'
          size={150}
        />
        <p className='text-center font-light'>
          Unfortunately, there are no photos with the requested keyword
        </p>
      </div>
    </MainSectionLayout>
  );
}

export default NoPhotosFound;
