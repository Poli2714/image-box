import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import PageLimitReached from './PageLimitReached';

test('renders PageLimitReached', () => {
  render(<PageLimitReached keyword='Baku' />);

  expect(screen.getByRole('main')).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { level: 1, name: 'Baku' })
  ).toBeInTheDocument();
  expect(screen.getByTestId('alert-icon')).toBeInTheDocument();

  const paragraph = screen.getByRole('paragraph');
  expect(paragraph).toBeInTheDocument();
  expect(paragraph).toHaveTextContent(
    /^sorry, the page number.*start a new search.$/i
  );
});
