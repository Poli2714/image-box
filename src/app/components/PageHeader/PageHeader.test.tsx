import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import PageHeader from './PageHeader';

test('renders PageHeader', () => {
  render(<PageHeader />);

  expect(screen.getByTestId('sun-icon')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Sign in' })).toBeInTheDocument();
  expect(screen.getByRole('banner')).toBeInTheDocument();
});
