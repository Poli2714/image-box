import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import NavItems from './NavItems';

test('renders NavItems', () => {
  render(<NavItems />);

  const navLinks = screen.getAllByRole('link');

  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(navLinks).toHaveLength(2);
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Collections')).toBeInTheDocument();
});
