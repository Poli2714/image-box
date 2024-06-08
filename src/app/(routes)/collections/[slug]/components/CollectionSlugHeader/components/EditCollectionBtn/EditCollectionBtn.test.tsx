import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import EditCollectionBtn from './EditCollectionBtn';

vi.mock('./components', () => ({
  EditCollectionNameForm: vi.fn(() => <div>Mock form div</div>),
}));

test('renders, EditCollectionBtn', () => {
  render(<EditCollectionBtn collectionId='sbjfkbaskdfa' />);

  expect(screen.getByRole('button', { name: 'Edit' })).toBeInTheDocument();
});

test('renders a dialog when user clicks on Edit button', async () => {
  const user = userEvent.setup();
  render(<EditCollectionBtn collectionId='sdhjvsdkv' />);
  const editBtn = screen.getByRole('button', { name: 'Edit' });

  await user.click(editBtn);
  const description = screen.getByRole('paragraph');

  expect(
    screen.getByRole('heading', { level: 2, name: 'Edit Collection Name' })
  ).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(description.textContent).toMatch(/^provide.*collection.$/i);
});
