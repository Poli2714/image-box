import { UserCollection } from '@/types/collections';

export const searchCollections = (
  collections: Array<UserCollection>,
  query: string
) => {
  if (query.trimStart().length === 0) return [];
  return collections.filter((collection) =>
    collection.name.toLowerCase().includes(query.toLowerCase())
  );
};
