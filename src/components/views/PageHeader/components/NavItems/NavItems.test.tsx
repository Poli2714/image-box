import { expect, test, vi } from 'vitest';
import { getByRole, render, screen } from '@testing-library/react';

import NavItems from './NavItems';

vi.mock('./components', () => ({
  NavItem: () => <div>Mock nav item</div>,
}));

test('renders NavItems', () => {
  render(<NavItems />);
  const listItems = screen.getAllByRole('listitem');

  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(listItems).toHaveLength(2);
});
