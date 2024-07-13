import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import BrandLogo from './BrandLogo';

vi.mock('lucide-react', () => ({
  BoxIcon: () => <div data-testid='box-icon'>Mock box icon</div>,
}));

test('renders BrandLogo', () => {
  render(<BrandLogo />);

  const link = screen.getByRole('link');
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', '/');

  expect(screen.getByTestId('box-icon')).toBeInTheDocument();

  const paragraph = screen.getByRole('paragraph');
  expect(paragraph).toBeInTheDocument();
  expect(paragraph).toHaveTextContent(/^imagebox$/i);
});
