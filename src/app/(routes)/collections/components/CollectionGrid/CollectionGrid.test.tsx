import { expect, test, vi } from 'vitest';
import { screen, render } from '@testing-library/react';

import CollectionGrid from './CollectionGrid';
import { mockUserCollections1 } from '@/mocks/mockData/userCollections';

vi.mock('./components', () => ({
  CollectionCard: () => <div>Mock Collection Card</div>,
}));

test('renders CollectionGrid', () => {
  render(<CollectionGrid userCollections={mockUserCollections1} />);

  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(3);
});
