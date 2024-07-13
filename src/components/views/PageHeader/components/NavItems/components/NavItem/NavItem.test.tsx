import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import NavItem from './NavItem';

test('renders NavItem', () => {
  render(<NavItem href='/' label='Home' />);
  const link = screen.getByRole('link');

  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', '/');
  expect(link).toHaveTextContent(/^home$/i);
});
