import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import CollectionSearchResults from './CollectionSearchResults';
import { mockUserCollections1 } from '@/mocks/mockData/userCollections';

test('renders CollectionSearchResults with 3 list items', () => {
  render(<CollectionSearchResults collections={mockUserCollections1} />);

  expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  expect(screen.getAllByRole('paragraph')[0].textContent).toMatch(
    /^3 matches$/i
  );
  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(3);
});

test('renders CollectionSearchResults with only header and paragraph when results array is empty', () => {
  render(<CollectionSearchResults collections={[]} />);

  expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  expect(screen.getAllByRole('paragraph')[0].textContent).toMatch(/^0 match$/i);
  expect(screen.queryByRole('list')).not.toBeInTheDocument();
  expect(screen.queryAllByRole('listitem')).toHaveLength(0);
});
