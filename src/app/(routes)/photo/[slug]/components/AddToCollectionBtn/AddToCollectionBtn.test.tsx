import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import AddToCollectionBtn from './AddToCollectionBtn';

test('renders AddToCollectionBtn', () => {
  render(<AddToCollectionBtn />);

  expect(screen.getByRole('button')).toBeInTheDocument();
  expect(screen.getByTestId('plus-icon')).toBeInTheDocument();
});
