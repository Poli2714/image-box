import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import PageHeader from './PageHeader';

test('renders PageHeader', () => {
  render(<PageHeader />);

  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(screen.getByTestId('menu-icon')).toBeInTheDocument();
  expect(screen.getAllByTestId('search-icon')).toHaveLength(2);
  expect(screen.getByRole('button', { name: 'Sign in' })).toBeInTheDocument();
  expect(screen.getByTestId('sun-icon')).toBeInTheDocument();
});
