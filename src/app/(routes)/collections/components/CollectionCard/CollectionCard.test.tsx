import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import CollectionCard from './CollectionCard';
import {
  mockUserCollections1,
  mockUserCollections2,
} from '@/mocks/mockData/userCollections';

test('renders CollectionCard with one photo', () => {
  render(<CollectionCard collection={mockUserCollections1[0]} />);

  expect(screen.getByRole('link')).toBeInTheDocument();
  expect(screen.getAllByRole('img')).toHaveLength(1);
  expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  expect(screen.getByRole('paragraph').textContent).toEqual('1 photo');
});

test('renders CollectionCard with three photos', () => {
  render(<CollectionCard collection={mockUserCollections2[0]} />);

  expect(screen.getAllByRole('img')).toHaveLength(3);
  expect(screen.getByRole('paragraph').textContent).toEqual('3 photos');
});
