import { Button } from '@/components/ui';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/shadcn';

type PhotoPaginationProps = {
  currentPage: number;
  slug: string;
  displayedPageNumbers: Array<number>;
  totalPages: number;
};

function PhotoPagination({
  currentPage,
  slug,
  displayedPageNumbers,
  totalPages,
}: PhotoPaginationProps) {
  const previousPage =
    currentPage === 1 ? null : (
      <PaginationItem>
        <PaginationPrevious
          href={
            currentPage - 1 === 1
              ? `/search/${slug}`
              : `/search/${slug}:pg-${currentPage - 1}`
          }
        />
      </PaginationItem>
    );

  const nextPage =
    currentPage + 1 > totalPages ? null : (
      <PaginationItem>
        <PaginationNext href={`/search/${slug}:pg-${currentPage + 1}`} />
      </PaginationItem>
    );

  return (
    <Pagination>
      <PaginationContent>
        {previousPage}
        {displayedPageNumbers.map((num) => (
          <PaginationItem key={num}>
            {num === currentPage ? (
              <Button disabled size='icon' variant='outline'>
                {num}
              </Button>
            ) : (
              <PaginationLink
                href={
                  num === 1 ? `/search/${slug}` : `/search/${slug}:pg-${num}`
                }
              >
                {num}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
        {totalPages > 3 &&
        currentPage + 1 < totalPages &&
        displayedPageNumbers.length === 3 ? (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        ) : null}
        {nextPage}
      </PaginationContent>
    </Pagination>
  );
}

export default PhotoPagination;
