import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import AddToCollectionDialog from './AddToCollectionDialog';
import { mockUserCollections1 } from '@/mocks/mockData/userCollections';

vi.mock('./components', () => ({
  AddToCollectionBtn: () => <button>Mock add to collection button</button>,
  NoCollectionsYet: () => <div>Mock no collections yet</div>,
  RequestToSignInPopup: () => <div>Mock request to sign in</div>,
  SearchForCollections: () => <div>Mock search for collections</div>,
}));

test('renders AddToCollectionDialog', () => {
  render(
    <AddToCollectionDialog
      isUserLoggedIn={false}
      userCollections={mockUserCollections1}
    />
  );

  expect(screen.getByText('Mock add to collection button')).toBeInTheDocument();
});
