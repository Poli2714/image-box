import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import SearchHeader from './SearchHeader';

test('renders SearchHeader', () => {
  render(<SearchHeader />);

  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(screen.getByTestId('banner-gradient')).toBeInTheDocument();
});
