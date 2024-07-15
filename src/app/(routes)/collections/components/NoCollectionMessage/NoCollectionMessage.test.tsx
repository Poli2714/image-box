import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import NoCollectionMessage from './NoCollectionMessage';

vi.mock('@/components/forms', () => ({
  SearchForm: () => <div>Mock form</div>,
}));

test('renders NoCollectionMessage', () => {
  render(<NoCollectionMessage />);
  const paragraph = screen.getByRole('paragraph');

  expect(
    screen.getByRole('heading', { level: 1, name: /^no collections yet$/i })
  ).toBeInTheDocument();
  expect(paragraph).toBeInTheDocument();
  expect(paragraph).toHaveTextContent(
    /^You haven't created.*to your collections.$/i
  );
  expect(screen.getByText('Mock form')).toBeInTheDocument();
});
