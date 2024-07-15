import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import RequestToSignInPopup from './RequestToSignInPopup';

vi.mock('@kinde-oss/kinde-auth-nextjs/server', () => ({
  LoginLink: () => <a role='link'>Sign in</a>,
}));

test('renders RequestToSignInPopup', () => {
  render(<RequestToSignInPopup />);

  const paragraph = screen.getByRole('paragraph');
  expect(paragraph).toBeInTheDocument();
  expect(paragraph).toHaveTextContent(/^please sign in.*collections.$/i);

  expect(screen.getByRole('link', { name: 'Sign in' })).toBeInTheDocument();
});
