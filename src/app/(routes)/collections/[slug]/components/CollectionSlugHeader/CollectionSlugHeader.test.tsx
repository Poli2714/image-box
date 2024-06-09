import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import CollectionSlugHeader from './CollectionSlugHeader';

vi.mock('./components', () => ({
  CollectionName: () => <h1>Mock Collection name</h1>,
  EditCollectionBtn: () => <button>Mock Edit</button>,
}));

test('renders CollectionSlugHeader', () => {
  render(
    <CollectionSlugHeader collectionId='sbhjdvbsdv' createdAt={new Date()} />
  );

  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
  expect(screen.getByRole('paragraph')).toBeInTheDocument();
  expect(screen.getByRole('paragraph').textContent).toMatch(/^created on.*$/i);
});
