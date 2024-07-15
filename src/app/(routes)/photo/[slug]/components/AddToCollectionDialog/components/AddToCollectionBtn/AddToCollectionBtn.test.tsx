import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import AddToCollectionBtn from './AddToCollectionBtn';

test('renders AddToCollectionBtn', () => {
  render(<AddToCollectionBtn />);

  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent(/^add to collection$/i);

  expect(screen.getByTestId('plus-icon')).toBeInTheDocument();
});
