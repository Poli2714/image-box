import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AddRemovePhotoButton from './AddRemovePhotoButton';
import { PhotoProvider } from '@/hooks/PhotoIdProvider';
import { UserCollection } from '@/types/collections';

vi.mock('./components', () => ({
  CollectionInfo: () => (
    <div data-testid='collection-info'>Mock Collection Info</div>
  ),
  LatestPhotoInCollection: () => (
    <div data-testid='latest-photo'>Mock Latest Photo</div>
  ),
}));

const userCollection1 = {
  id: 'testId1',
  name: 'testname1',
  updatedAt: new Date(),
  collectionsToPhotos: [
    {
      photo: {
        id: '123',
        altDescription: 'test description1',
        slug: 'testSlug1',
        regular: 'test-regular.png',
        thumb: 'test-thumb.png',
      },
    },
  ],
};

const userCollection2 = {
  id: 'testId2',
  name: 'testname2',
  updatedAt: new Date(),
  collectionsToPhotos: [
    {
      photo: {
        id: '123456',
        altDescription: 'test description2',
        slug: 'testSlug2',
        regular: 'test-regular.png',
        thumb: 'test-thumb.png',
      },
    },
  ],
};

type MockParentComponentProps = {
  userCollection: UserCollection;
};

function MockParentComponent({ userCollection }: MockParentComponentProps) {
  return (
    <PhotoProvider
      photoForCollection={{
        altDescription: 'test description',
        id: '123456',
        slug: 'test-slug',
        regular: 'https://test-regular.png',
        thumb: 'https://test-thumb.png',
      }}
    >
      <AddRemovePhotoButton userCollection={userCollection} />
    </PhotoProvider>
  );
}

test('renders AddRemovePhotoButton', () => {
  render(<MockParentComponent userCollection={userCollection1} />);

  expect(screen.getByRole('form')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
  expect(screen.getByTestId('latest-photo')).toBeInTheDocument();
  expect(screen.getByTestId('collection-info')).toBeInTheDocument();
});

test('renders AddRemovePhotoButton without check mark icon when the selected photo is not in the collection', () => {
  render(<MockParentComponent userCollection={userCollection1} />);

  expect(screen.queryByTestId('circle-check-icon')).not.toBeInTheDocument();
});

test('renders AddRemovePhotoButton with check mark icon when the selected photo is in the collection', () => {
  render(<MockParentComponent userCollection={userCollection2} />);

  expect(screen.getByTestId('circle-check-icon')).toBeInTheDocument();
});

test('renders plus icon and "Add to Collection" action name when user hovers over AddRemovePhotoButton and when the selected photo is not in the collection', async () => {
  const user = userEvent.setup();
  render(<MockParentComponent userCollection={userCollection1} />);
  const button = screen.getByRole('button');

  await user.hover(button);
  expect(screen.getByTestId('plus-icon')).toBeInTheDocument();
  expect(screen.getByRole('paragraph').textContent).toMatch(
    /^add to collection$/i
  );

  await user.unhover(button);
  expect(screen.queryByTestId('plus-icon')).not.toBeInTheDocument();
  expect(screen.queryByRole('paragraph')).not.toBeInTheDocument();
});

test('renders minus icon and "Remove" action name when user hovers over AddRemovePhotoButton and when the selected photo is in the collection', async () => {
  const user = userEvent.setup();
  render(<MockParentComponent userCollection={userCollection2} />);
  const button = screen.getByRole('button');

  await user.hover(button);
  expect(screen.getByTestId('minus-icon')).toBeInTheDocument();
  expect(screen.getByRole('paragraph').textContent).toMatch(/^remove$/i);

  await user.unhover(button);
  expect(screen.queryByTestId('minus-icon')).not.toBeInTheDocument();
  expect(screen.queryByRole('paragraph')).not.toBeInTheDocument();
});
