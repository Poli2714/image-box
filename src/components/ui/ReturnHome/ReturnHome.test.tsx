import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import ReturnHome from './ReturnHome';

test('renders ReturnHome', () => {
  render(<ReturnHome />);

  expect(screen.getByRole('link', { name: 'Return Home' })).toBeInTheDocument();
});
