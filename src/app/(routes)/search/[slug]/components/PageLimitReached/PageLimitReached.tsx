import { OctagonAlertIcon } from 'lucide-react';

import { MainSectionLayout } from '@/components/ui';
import { SearchPageHeading } from '..';

type PageLimitReachedProps = {
  keyword: string;
};

function PageLimitReached({ keyword }: PageLimitReachedProps) {
  return (
    <MainSectionLayout className='flex flex-1 flex-col'>
      <SearchPageHeading slug={keyword} />
      <div className='flex flex-1 flex-col items-center justify-center space-y-4'>
        <OctagonAlertIcon
          className='mb-4 text-secondary'
          data-testid='alert-icon'
          size={150}
        />
        <p className='text-center font-light'>
          Sorry, the page number you entered exceeds the total number of pages
          available for your search. Please try navigating using the available
          pages or start a new search.
        </p>
      </div>
    </MainSectionLayout>
  );
}

export default PageLimitReached;
