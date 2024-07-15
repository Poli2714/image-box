import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import LatestCollections from './LatestCollections';
import { mockUserCollections1 } from '@/mocks/mockData/userCollections';

vi.mock('@/components/buttons', () => ({
  AddRemovePhotoButton: () => <div>Mock button</div>,
}));

test('renders LatestCollections', () => {
  render(<LatestCollections latestCollections={mockUserCollections1} />);

  expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(3);
});
