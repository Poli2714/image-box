import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import LatestCollections from './LatestCollections';
import { mockUserCollections1 } from '@/mocks/mockData/userCollections';

const userCollections = mockUserCollections1;

test('renders LatestCollections', () => {
  render(<LatestCollections latestCollections={userCollections} />);

  expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(3);
});
