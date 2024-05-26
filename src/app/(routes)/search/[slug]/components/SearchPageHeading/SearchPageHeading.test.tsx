import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import SearchPageHeading from './SearchPageHeading';

test('renders SearchPageHeading', () => {
  render(<SearchPageHeading slug='los-angeles' />);

  const heading = screen.getByRole('heading');

  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent('Los angeles');
});
