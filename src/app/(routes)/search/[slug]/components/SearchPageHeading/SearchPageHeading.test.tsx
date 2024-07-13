import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import SearchPageHeading from './SearchPageHeading';

test('renders SearchPageHeading', () => {
  render(<SearchPageHeading slug='los angeles' />);

  expect(
    screen.getByRole('heading', { name: 'Los angeles' })
  ).toBeInTheDocument();
});
