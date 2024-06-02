import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchCollections from './SearchCollections';
import { mockUserCollections3 } from '@/mocks/mockData/userCollections';

vi.mock('@kinde-oss/kinde-auth-nextjs/server', () => ({
  getKindeServerSession: () => {},
}));

test('renders SearchCollections with no user collections', () => {
  render(<SearchCollections userCollections={[]} />);

  expect(screen.getByTestId('no-collections')).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { level: 2, name: 'No Collections Yet' })
  ).toBeInTheDocument();
  expect(screen.getAllByRole('paragraph')[0].textContent).toEqual(
    "You don't have any collections yet. Start a new collection to add and organize your beautiful photos."
  );
  expect(screen.getAllByRole('form')).toHaveLength(1);
});

test('renders SearchCollections with user collections', () => {
  render(<SearchCollections userCollections={mockUserCollections3} />);

  expect(screen.getAllByRole('form')).toHaveLength(5);
  expect(
    screen.getByRole('heading', { level: 2, name: 'Latest Collections' })
  ).toBeInTheDocument();
  expect(
    screen.queryByRole('heading', { level: 2, name: 'Search Results' })
  ).not.toBeInTheDocument();
});

test('renders SearchCollections with search results', async () => {
  const user = userEvent.setup();
  render(<SearchCollections userCollections={mockUserCollections3} />);
  const searchInput = screen.getAllByRole('searchbox')[0];

  await user.type(searchInput, 'los');
  expect(screen.getAllByRole('paragraph')[0].textContent).toEqual('1 match');
  expect(screen.getAllByRole('form')).toHaveLength(3);
  await user.clear(searchInput);
  await user.type(searchInput, 'hellooo');
  expect(screen.getAllByRole('paragraph')[0].textContent).toEqual('0 match');
  expect(screen.getAllByRole('form')).toHaveLength(2);
});
