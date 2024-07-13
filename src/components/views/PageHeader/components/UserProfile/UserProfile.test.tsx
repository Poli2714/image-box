import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import UserProfile from './UserProfile';

test('renders UserProfile', () => {
  render(<UserProfile userInitials='EM' userPicture='elgun.png' />);

  expect(screen.getByRole('button')).toBeInTheDocument();
  expect(screen.getByText('EM')).toBeInTheDocument();
});

test('renders dropdown with sign out link when user clicks on avatar', async () => {
  const user = userEvent.setup();
  render(<UserProfile userInitials='EM' userPicture='elgun.png' />);

  await user.click(screen.getByRole('button'));

  expect(screen.getByRole('link', { name: /^sign out$/i })).toBeInTheDocument();
});
