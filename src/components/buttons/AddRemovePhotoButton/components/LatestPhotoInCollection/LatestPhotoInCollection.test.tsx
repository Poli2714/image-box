import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import LatestPhotoInCollection from './LatestPhotoInCollection';

test('renders LatestPhotoInCollection with latest photo when there is at least one photo in collection', () => {
  render(
    <LatestPhotoInCollection
      numberOfPhotosInCollection={3}
      altDescription='Test description'
      photoSrc='https://test.com'
    />
  );

  expect(screen.getByRole('img')).toBeInTheDocument();
  expect(screen.queryByTestId('image-icon')).not.toBeInTheDocument();
});

test('renders LatestPhotoInCollection with default photo when there are no images in collection', () => {
  render(
    <LatestPhotoInCollection
      numberOfPhotosInCollection={0}
      altDescription={undefined}
      photoSrc={undefined}
    />
  );

  expect(screen.getByTestId('image-icon')).toBeInTheDocument();
  expect(screen.queryByRole('img')).not.toBeInTheDocument();
});
