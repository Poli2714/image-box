import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import PageHeader from './PageHeader';

vi.mock('@kinde-oss/kinde-auth-nextjs/components', () => ({
  LoginLink: () => <a role='link'>Sign in</a>,
}));

vi.mock('./components', () => ({
  BrandLogo: () => <div>Mock brand logo</div>,
  Menu: () => <div>Mock menu</div>,
  NavItems: () => <div>Mock nav items</div>,
  SearchIconLink: () => <div>Mock search icon Link</div>,
  ThemeToggle: () => <div>Mock theme toggle</div>,
  UserProfile: () => <button>Mock user profile</button>,
}));

vi.mock('@/components/forms', () => ({
  SearchForm: () => <div>Mock search form</div>,
}));

test('renders PageHeader with Sign in link', () => {
  render(
    <PageHeader
      isUserLoggedIn={false}
      userInitials='EM'
      userPicture={undefined}
    />
  );

  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(screen.queryByRole('button')).not.toBeInTheDocument();
  expect(screen.getByRole('link', { name: /^sign in$/i })).toBeInTheDocument();
});

test('renders PageHeader with profile button', () => {
  render(
    <PageHeader
      isUserLoggedIn={true}
      userInitials='EM'
      userPicture={undefined}
    />
  );

  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
  expect(
    screen.queryByRole('link', { name: /^sign in$/i })
  ).not.toBeInTheDocument();
});
