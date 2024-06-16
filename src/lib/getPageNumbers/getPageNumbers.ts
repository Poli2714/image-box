export const getPageNumbers = (currentPage: number, totalPages: number) => {
  let pageNumbers: Array<number> = [];

  if (totalPages < 2) {
    pageNumbers = [1];
  } else if (totalPages < 3) {
    pageNumbers = [1, 2];
  } else if (currentPage === 1 || currentPage === 2) {
    pageNumbers = [1, 2, 3];
  } else {
    for (let i = currentPage; i < currentPage + 3; i++) {
      if (i > totalPages) {
        return [totalPages - 2, totalPages - 1, totalPages];
      } else {
        pageNumbers.push(i - 1);
      }
    }
  }

  return pageNumbers;
};
