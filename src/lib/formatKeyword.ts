export const formatKeyword = (keyword: string) =>
  keyword.trim().replaceAll(/-|\s/g, ' ');
