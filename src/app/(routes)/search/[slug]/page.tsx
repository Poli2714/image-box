import { redirect } from 'next/navigation';

import { MainSectionLayout, PhotoGrid } from '@/components/ui';
import {
  NoPhotosFound,
  PageLimitReached,
  PhotoPagination,
  SearchPageHeading,
} from './components';

import { getSearchResult } from '@/lib/services/getSearchResult/getSearchResult';
import { SearchPageParams } from '@/types/searchPage';

type SearchSlugPageProps = {
  params: SearchPageParams;
};

export default async function SearchSlugPage({ params }: SearchSlugPageProps) {
  // Handle the case when a user manually searches for space or tab characters
  if (params.slug.length === 0) {
    redirect('/search');
  }

  const {
    base64results,
    currentPage,
    displayedPageNumbers,
    formattedQuery,
    hasPageLimitReached,
    photos,
    totalPages,
    urlQuery,
  } = await getSearchResult(params.slug);

  if (hasPageLimitReached) {
    return <PageLimitReached keyword={formattedQuery} />;
  }
  if (totalPages === 0) {
    return <NoPhotosFound keyword={formattedQuery} />;
  }

  return (
    <MainSectionLayout className='space-y-8'>
      <SearchPageHeading slug={formattedQuery} />
      <PhotoGrid photos={photos} base64results={base64results} />
      <PhotoPagination
        currentPage={currentPage}
        slug={urlQuery}
        displayedPageNumbers={displayedPageNumbers}
        totalPages={totalPages}
      />
    </MainSectionLayout>
  );
}
