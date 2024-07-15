import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchCollections from './SearchForCollections';
import { mockUserCollections3 } from '@/mocks/mockData/userCollections';

vi.mock('@/components/ui', () => ({
  LatestCollections: () => <div>Mock latest collections</div>,
}));

vi.mock('./components', () => ({
  CollectionSearchResults: () => <div>Mock collection search results</div>,
}));

vi.mock('@/components/forms', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/components/forms')>();
  return {
    ...actual,
    CreateCollectionForm: () => <div>Mock create collection form</div>,
  };
});

vi.mock('@/actions/createCollection', () => ({
  createCollection: vi.fn(),
}));

test('renders SearchCollections with latest user collections', () => {
  render(<SearchCollections userCollections={mockUserCollections3} />);

  expect(screen.getByRole('form')).toBeInTheDocument();
  expect(screen.getByRole('searchbox')).toBeInTheDocument();

  expect(screen.getByText('Mock latest collections')).toBeInTheDocument();
  expect(
    screen.queryByText('Mock collection search results')
  ).not.toBeInTheDocument();
  expect(screen.getByText('Mock create collection form')).toBeInTheDocument();
});

test('renders SearchCollections with search results', async () => {
  const user = userEvent.setup();
  render(<SearchCollections userCollections={mockUserCollections3} />);
  const searchInput = screen.getByRole('searchbox');

  await user.type(searchInput, 'los');
  expect(screen.queryByText('Mock latest collections')).not.toBeInTheDocument();
  expect(
    screen.getByText('Mock collection search results')
  ).toBeInTheDocument();

  await user.clear(searchInput);
  expect(screen.getByText('Mock latest collections')).toBeInTheDocument();
  expect(
    screen.queryByText('Mock collection search results')
  ).not.toBeInTheDocument();
});
