export const formatQuery = (query: string) =>
  query.trim().replaceAll(/-|\s/g, ' ');
