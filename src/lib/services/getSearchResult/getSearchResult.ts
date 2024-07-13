import { getAllBase64 } from '@/lib/getBase64';
import { getDisplayedPageNumbers } from '@/lib/getPageNumbers/getDisplayedPageNumbers';
import { getPhotos } from '@/lib/getPhotos';
import { formatSlug } from '@/lib/utilities/formatSlug/formatSlug';

export async function getSearchResult(slug: string) {
  const { currentPage, formattedQuery, urlQuery } = formatSlug(slug);

  const result = await getPhotos(formattedQuery, currentPage);
  const totalPages = result.totalPages > 200 ? 200 : result.totalPages;
  const hasPageLimitReached = currentPage > 1 && currentPage > totalPages;

  const displayedPageNumbers = getDisplayedPageNumbers(currentPage, totalPages);

  const photoUrls = result.photos.map((photo) => photo.urls.thumb);
  const base64results = await getAllBase64(photoUrls);

  return {
    base64results,
    currentPage,
    displayedPageNumbers,
    formattedQuery,
    hasPageLimitReached,
    photos: result.photos,
    totalPages,
    urlQuery,
  };
}
