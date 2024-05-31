import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import CollectionInfo from './CollectionInfo';

test('renders CollectionInfo with no photos', () => {
  render(
    <CollectionInfo numberOfPhotosInCollection={0} collectionName='Test' />
  );

  expect(screen.getByRole('heading', { level: 3 }).textContent).toMatch(
    /^test$/i
  );
  expect(screen.getByRole('paragraph').textContent).toMatch(/^no photos yet$/i);
});

test('renders CollectionInfo with 1 photo', () => {
  render(
    <CollectionInfo numberOfPhotosInCollection={1} collectionName='Test 1' />
  );

  expect(screen.getByRole('heading', { level: 3 }).textContent).toMatch(
    /^test 1$/i
  );
  expect(screen.getByRole('paragraph').textContent).toEqual('1 photo');
});

test('renders CollectionInfo with 3 photos', () => {
  render(
    <CollectionInfo numberOfPhotosInCollection={3} collectionName='Test 2' />
  );

  expect(screen.getByRole('heading', { level: 3 }).textContent).toMatch(
    /^test 2$/i
  );
  expect(screen.getByRole('paragraph').textContent).toEqual('3 photos');
});
