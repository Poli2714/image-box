import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import BrandLogo from './BrandLogo';

test('renders BrandLogo', () => {
  render(<BrandLogo />);

  expect(screen.getByRole('link')).toBeInTheDocument();
  expect(screen.getByTestId('box-icon')).toBeInTheDocument();
  expect(screen.getByRole('paragraph')).toBeInTheDocument();
});
