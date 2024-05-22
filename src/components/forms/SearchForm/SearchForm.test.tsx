import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchForm from './SearchForm';

test('renders SearchForm', () => {
  render(<SearchForm />);

  expect(screen.getByRole('form')).toBeInTheDocument();
  expect(screen.getByRole('searchbox')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
  expect(screen.getByTestId('search-icon')).toBeInTheDocument();
});

test('correctly displays user input in searchbox', async () => {
  const user = userEvent.setup();

  render(<SearchForm />);
  const searchBox = screen.getByRole('searchbox');

  await user.type(searchBox, 'love');
  expect(searchBox).toHaveValue('love');
});
