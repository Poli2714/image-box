import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import NoPhotosFound from './NoPhotosFound';

vi.mock('..', () => ({
  SearchPageHeading: ({ slug }: { slug: string }) => <h1>{slug}</h1>,
}));

test('renders NoPhotosFound', () => {
  render(<NoPhotosFound keyword='test' />);
  const paragraph = screen.getByRole('paragraph');

  expect(
    screen.getByRole('heading', { level: 1, name: 'test' })
  ).toBeInTheDocument();
  expect(screen.getByTestId('search-icon')).toBeInTheDocument();
  expect(paragraph).toBeInTheDocument();
  expect(paragraph).toHaveTextContent(/^unfortunately,.*keyword$/i);
});
