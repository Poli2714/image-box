import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DeleteCollectionAlert from './DeleteCollectionAlert';

vi.mock('@kinde-oss/kinde-auth-nextjs/server', () => ({
  getKindeServerSession: () => {},
}));

test('renders DeleteCollectionAlert', () => {
  render(<DeleteCollectionAlert collectionId='jskvjksv' />);

  expect(screen.getByRole('button', { name: 'Delete' })).toBeInTheDocument();
});

test('renders AlertDialog when user clicks on Delete button', async () => {
  const user = userEvent.setup();
  render(<DeleteCollectionAlert collectionId='sbnjsndvkj' />);
  const deleteBtn = screen.getByRole('button', { name: 'Delete' });

  await user.click(deleteBtn);

  expect(
    screen.getByRole('heading', { level: 2, name: 'Confirm Deletion' })
  ).toBeInTheDocument();
  expect(screen.getByRole('paragraph')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument();
});

test('closes the AlertDialog when user clicks on Cancel button', async () => {
  const user = userEvent.setup();
  render(<DeleteCollectionAlert collectionId='hdjkajkd' />);
  const deleteBtn = screen.getByRole('button', { name: 'Delete' });

  await user.click(deleteBtn);
  const cancelBtn = screen.getByRole('button', { name: 'Cancel' });
  await user.click(cancelBtn);
  expect(
    screen.queryByRole('button', { name: 'Cancel' })
  ).not.toBeInTheDocument();
  expect(screen.getAllByRole('button')).toHaveLength(1);
});
