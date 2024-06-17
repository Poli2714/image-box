import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ThemeToggle from './ThemeToggle';

test('renders ThemeToggle', () => {
  render(<ThemeToggle />);

  expect(screen.getByRole('button')).toBeInTheDocument();
  expect(screen.getByTestId('sun-icon')).toBeInTheDocument();
  expect(screen.getByTestId('moon-icon')).toBeInTheDocument();
  expect(screen.getByTestId('toggle')).toHaveTextContent(/^toggle theme$/i);
});

test('renders dropdown menu when click on trigger button', async () => {
  const user = userEvent.setup();
  render(<ThemeToggle />);
  const triggerBtn = screen.getByRole('button');

  await user.click(triggerBtn);
  expect(screen.getByTestId('light')).toBeInTheDocument();
  expect(screen.getByTestId('dark')).toBeInTheDocument();
  expect(screen.getByTestId('system')).toBeInTheDocument();
});

test('closes the dropdown menu when click on trigger button twice', async () => {
  const user = userEvent.setup();
  render(<ThemeToggle />);
  const triggerBtn = screen.getByRole('button');

  await user.dblClick(triggerBtn);

  expect(screen.queryByTestId('light')).not.toBeInTheDocument();
  expect(screen.queryByTestId('dark')).not.toBeInTheDocument();
  expect(screen.queryByTestId('system')).not.toBeInTheDocument();
});
