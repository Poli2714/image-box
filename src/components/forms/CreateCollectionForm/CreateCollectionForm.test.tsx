import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CreateCollectionForm from './CreateCollectionForm';

vi.mock('@kinde-oss/kinde-auth-nextjs/server', () => ({
  getKindeServerSession: () => {},
}));

test('renders CreateCollectionForm', () => {
  render(<CreateCollectionForm />);

  expect(screen.getByRole('form')).toBeInTheDocument();
  expect(screen.getByRole('textbox')).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: 'Create Collection' })
  ).toBeInTheDocument();
});

test('renders error message when user clicks on button without typing', async () => {
  const user = userEvent.setup();

  render(<CreateCollectionForm />);
  const button = screen.getByRole('button', { name: 'Create Collection' });
  expect(screen.queryByRole('paragraph')).not.toBeInTheDocument();

  await user.click(button);
  expect(screen.getByRole('paragraph')).toBeInTheDocument();
});

test('renders input value while user types', async () => {
  const user = userEvent.setup();

  render(<CreateCollectionForm />);
  const textInput = screen.getByRole('textbox');

  await user.type(textInput, 'Summer');
  expect(textInput).toHaveValue('Summer');
});
