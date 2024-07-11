import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { notFound, redirect } from 'next/navigation';

import { Button } from '@/components/ui';
import { NoPhotosFound, SearchPageHeading } from './components';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/shadcn';
import PhotoGrid from '@/components/ui/PhotoGrid/PhotoGrid';

import { formatKeyword } from '@/lib/formatKeyword';
import { getAllBase64 } from '@/lib/getBase64';
import { getPageNumbers } from '@/lib/getPageNumbers/getPageNumbers';
import { getPhotos } from '@/lib/getPhotos';
import { SearchPageParams } from '@/types/searchPage';

type SearchKeywordProps = {
  params: SearchPageParams;
};

async function SearchKeyword({ params }: SearchKeywordProps) {
  const decodedSlug = decodeURIComponent(params.slug);
  const colonIndex = decodedSlug.indexOf(':pg-');
  const keyword =
    colonIndex > 0 ? decodedSlug.slice(0, colonIndex) : decodedSlug;
  const formattedKeyword = formatKeyword(keyword);
  if (formattedKeyword.length === 0) redirect('/search');

  const currentPage =
    colonIndex > 0 ? Number(decodedSlug.slice(colonIndex + 4)) : 1;

  const result = await getPhotos(formattedKeyword, currentPage);
  const totalPages = result.totalPages > 200 ? 200 : result.totalPages;
  if (currentPage > 1 && currentPage > totalPages) {
    notFound();
  }
  if (result.totalPages === 0) {
    return <NoPhotosFound keyword={formattedKeyword} />;
  }

  const pageNumbers = getPageNumbers(currentPage, totalPages);

  const photoUrls = result.photos.map((photo) => photo.urls.thumb);
  const base64results = await getAllBase64(photoUrls);

  return (
    <div className='space-y-8'>
      <SearchPageHeading slug={formattedKeyword} />
      <PhotoGrid photos={result.photos} base64results={base64results} />
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            {currentPage === 1 ? (
              <Button
                asChild
                className='gap-1 pl-2.5'
                disabled
                variant='outline'
              >
                <div>
                  <ChevronLeftIcon size={16} />
                  Previous
                </div>
              </Button>
            ) : (
              <PaginationPrevious
                href={
                  currentPage - 1 === 1
                    ? `/search/${keyword}`
                    : `/search/${keyword}:pg-${currentPage - 1}`
                }
              />
            )}
          </PaginationItem>
          {pageNumbers.map((num) => (
            <PaginationItem key={num}>
              {num === currentPage ? (
                <Button disabled size='icon' variant='outline'>
                  {num}
                </Button>
              ) : (
                <PaginationLink
                  href={
                    num === 1
                      ? `/search/${keyword}`
                      : `/search/${keyword}:pg-${num}`
                  }
                >
                  {num}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}
          {currentPage + 1 < totalPages && pageNumbers.length === 3 ? (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          ) : null}
          <PaginationItem>
            {currentPage + 1 > totalPages ? (
              <Button className='gap-1 pr-2.5' disabled variant='outline'>
                Next
                <ChevronRightIcon size={16} />
              </Button>
            ) : (
              <PaginationNext
                href={`/search/${keyword}:pg-${currentPage + 1}`}
              />
            )}
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default SearchKeyword;
