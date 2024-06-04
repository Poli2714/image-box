import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import CollectionsHeader from './CollectionsHeader';

test('renders CollectionsHeader', () => {
  render(<CollectionsHeader />);

  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
    /^collections$/i
  );
  expect(screen.getByRole('paragraph')).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /^unsplash license$/i })
  ).toBeInTheDocument();
});
