import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import CollectionSlugHeader from './CollectionSlugHeader';

test('renders CollectionSlugHeader', () => {
  render(
    <CollectionSlugHeader collectionName='Test name' createdAt={new Date()} />
  );

  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
    /^test name$/i
  );
  expect(screen.getByRole('button', { name: 'Edit' })).toBeInTheDocument();
  expect(screen.getByRole('paragraph')).toBeInTheDocument();
});
