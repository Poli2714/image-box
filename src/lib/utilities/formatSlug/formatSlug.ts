import { formatQuery } from '../formatQuery/formatQuery';

export const formatSlug = (slug: string) => {
  const decodedSlug = decodeURIComponent(slug);

  const colonIndex = decodedSlug.indexOf(':pg-');
  const urlQuery =
    colonIndex > 0 ? decodedSlug.slice(0, colonIndex) : decodedSlug;

  const formattedQuery = formatQuery(urlQuery);

  let currentPage = 1;
  const suspiciousCurrentPage = Number(decodedSlug.slice(colonIndex + 4));

  if (
    colonIndex > 0 &&
    !Number.isNaN(suspiciousCurrentPage) &&
    suspiciousCurrentPage > 1
  ) {
    currentPage = suspiciousCurrentPage;
  }

  return {
    currentPage,
    formattedQuery,
    urlQuery,
  };
};
