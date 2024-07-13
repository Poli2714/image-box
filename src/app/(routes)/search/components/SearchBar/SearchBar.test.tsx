import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';

vi.mock('@/components/forms', () => ({
  SearchForm: () => <div>Mock Search form</div>,
}));

test('renders SearchBar', () => {
  render(<SearchBar />);

  expect(screen.getByTestId('search-bar')).toBeInTheDocument();
  expect(screen.getByTestId('banner-gradient')).toBeInTheDocument();
});
