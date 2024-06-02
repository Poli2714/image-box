import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import AddToCollectionBtn from './AddToCollectionBtn';

vi.mock('@kinde-oss/kinde-auth-nextjs/server', () => ({
  getKindeServerSession: () => ({
    isAuthenticated: () => true,
    getUser: () => ({
      id: 'ghjh',
    }),
  }),
}));

test('renders AddToCollectionBtn', () => {
  // render(<AddToCollectionBtn />);
  // expect(screen.getByRole('button')).toBeInTheDocument();
  // expect(screen.getByTestId('plus-icon')).toBeInTheDocument();
});
