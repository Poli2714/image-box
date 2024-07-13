import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import SearchIconLink from './SearchIconLink';

vi.mock('lucide-react', () => ({
  SearchIcon: () => <div data-testid='search-icon'>Mock search icon</div>,
}));

test('renders SearchIconLink', () => {
  render(<SearchIconLink />);
  const link = screen.getByRole('link');

  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', '/search');

  expect(screen.getByTestId('search-icon')).toBeInTheDocument();
});
