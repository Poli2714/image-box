import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import AuthorImageAndName from './AuthorImageAndName';

test('renders AuthorImageAndName', () => {
  render(
    <AuthorImageAndName
      portfolioUrl='https://test.com'
      socialUrl='https://test2.com'
      name='John Doe'
      imageUrl='https://test3.com'
    />
  );

  expect(screen.getByRole('link', { name: 'John Doe' })).toBeInTheDocument();
  expect(screen.getAllByRole('link')).toHaveLength(2);
  expect(screen.getByRole('img')).toBeInTheDocument();
});
