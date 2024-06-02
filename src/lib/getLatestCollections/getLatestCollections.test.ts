import { expect, test } from 'vitest';

import { getLatestCollections } from './getLatestCollections';
import { mockUserCollections2 } from '@/mocks/mockData/userCollections';

test('slices first three objects from collections array', () => {
  expect(getLatestCollections(mockUserCollections2)).toHaveLength(3);
});
