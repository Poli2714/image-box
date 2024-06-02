import { expect, test } from 'vitest';

import { searchCollections } from './searchCollections';
import { mockUserCollections3 } from '@/mocks/mockData/userCollections';

test('return only one collection result', () => {
  expect(searchCollections(mockUserCollections3, 'Los')).toHaveLength(1);
});

test('returns empty array (0 collection result)', () => {
  expect(searchCollections(mockUserCollections3, 'k')).toHaveLength(0);
});
