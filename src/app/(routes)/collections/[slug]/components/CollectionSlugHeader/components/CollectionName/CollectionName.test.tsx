import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import CollectionName from './CollectionName';

vi.mock('@/hooks/OptimisticCollectionNameProvider', () => ({
  useOptimisticCollectionNameContext: () => ({
    optimisticCollectionName: {
      name: 'mock name',
    },
  }),
}));

test('renders CollectionName', () => {
  render(<CollectionName />);

  expect(
    screen.getByRole('heading', { level: 1, name: 'mock name' })
  ).toBeInTheDocument();
});
