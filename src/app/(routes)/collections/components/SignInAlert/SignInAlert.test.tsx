import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import SignInAlert from './SignInAlert';

vi.mock('@kinde-oss/kinde-auth-nextjs/server', () => ({
  LoginLink: () => <a href='#'>Mock sign in</a>,
}));

test('renders SignInAlert', () => {
  render(<SignInAlert />);

  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  expect(screen.getByRole('paragraph')).toBeInTheDocument();
  expect(screen.getByRole('link')).toBeInTheDocument();
});
