import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Menu from './Menu';

test('renders Menu', async () => {
  const user = userEvent.setup();

  render(
    <Menu>
      <button>Test</button>
    </Menu>
  );

  const menuBtn = screen.getByRole('button');

  expect(screen.getByTestId('nav-menu')).toBeInTheDocument();
  await user.click(menuBtn);
  const links = screen.getAllByRole('link');

  expect(links).toHaveLength(2);
  expect(screen.getByRole('menuitem', { name: 'Home' })).toBeInTheDocument();
  expect(
    screen.getByRole('menuitem', { name: 'Collections' })
  ).toBeInTheDocument();
});
