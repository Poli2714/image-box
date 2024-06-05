import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import NoPhotosMessage from './NoPhotosMessage';

vi.mock('@kinde-oss/kinde-auth-nextjs/server', () => ({
  getKindeServerSession: () => {},
}));

vi.mock('next/navigation', () => ({
  useRouter: () => {},
}));

test('renders NoPhotosMessage', () => {
  render(<NoPhotosMessage />);

  expect(screen.getByTestId('no-photos-message')).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(
    /^no photos yet$/i
  );
  expect(screen.getAllByRole('paragraph')[0].textContent).toEqual(
    'This collection is currently empty. Start exploring and add your favorite photos to make it shine.'
  );
});
