import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import PageHeader from './PageHeader';
import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/types';

vi.mock('@kinde-oss/kinde-auth-nextjs/components', () => ({
  LoginLink: () => <a>Sign in</a>,
  LogoutLink: () => <a>Sign out</a>,
}));

vi.mock('@kinde-oss/kinde-auth-nextjs/server', () => ({
  getKindeServerSession: () => ({
    isAuthenticated: async () => false,
    getUser: async (): Promise<KindeUser | null> => null,
  }),
}));

vi.mock('./components', () => ({
  BrandLogo: () => <div>Mock brand logo</div>,
  Menu: () => <div>Mock menu</div>,
  NavItems: () => <div>Mock nav items</div>,
  ThemeToggle: () => <div>Mock theme toggle</div>,
}));

vi.mock('@/components/forms', () => ({
  SearchForm: () => <div>Mock search form</div>,
}));

test('renders PageHeader', () => {
  render(<PageHeader />);

  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(screen.getByTestId('menu-icon')).toBeInTheDocument();
  expect(screen.getAllByTestId('search-icon')).toHaveLength(2);
  expect(screen.getByRole('link', { name: 'Sign in' })).toBeInTheDocument();
  expect(screen.getByTestId('sun-icon')).toBeInTheDocument();
});
