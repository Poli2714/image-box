import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Menu from './Menu';

vi.mock('lucide-react', () => ({
  MenuIcon: () => <div data-testid='menu-icon'>Mock Menu icon</div>,
}));

test('renders Menu', () => {
  render(<Menu />);

  expect(screen.getByRole('button')).toBeInTheDocument();
  expect(screen.getByTestId('menu-icon')).toBeInTheDocument();
});

test('renders dropdown menu when user clicks on menu icon', async () => {
  const user = userEvent.setup();

  render(<Menu />);
  const menuBtn = screen.getByRole('button');

  await user.click(menuBtn);

  const links = screen.getAllByRole('link');
  expect(links).toHaveLength(2);
  expect(links[0]).toHaveAttribute('href', '/');
  expect(links[0]).toHaveTextContent(/^home$/i);
  expect(links[1]).toHaveAttribute('href', '/collections');
  expect(links[1]).toHaveTextContent(/^collections$/i);
});
