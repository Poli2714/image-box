import { UserCollection } from '@/types/collections';

export const getLatestCollections = (collections: Array<UserCollection>) =>
  collections.slice(0, 3);
