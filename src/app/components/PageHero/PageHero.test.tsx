import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import PageHero from './PageHero';

test('renders PageHero', () => {
  render(<PageHero />);

  expect(screen.getByRole('main')).toBeInTheDocument();
  expect(screen.getByTestId('hero-img-1')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Search' })).toBeInTheDocument();
  expect(screen.getByRole('paragraph')).toBeInTheDocument();
  expect(screen.getByTestId('hero-img-2')).toBeInTheDocument();
});
