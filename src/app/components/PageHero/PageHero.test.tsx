import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import PageHero from './PageHero';

vi.mock('@/components/forms', () => ({
  SearchForm: () => <div>Mock search form</div>,
}));

test('renders PageHero', () => {
  render(<PageHero />);

  expect(screen.getByRole('main')).toBeInTheDocument();
  expect(screen.getByTestId('hero-img-1')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Search' })).toBeInTheDocument();
  expect(screen.getByRole('paragraph')).toBeInTheDocument();
  expect(screen.getByTestId('hero-img-2')).toBeInTheDocument();
});
