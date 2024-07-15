import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import NoCollectionsYet from './NoCollectionsYet';

test('renders NoCollectionsYet', () => {
  render(<NoCollectionsYet />);

  expect(
    screen.getByRole('heading', { level: 2, name: /^no collections yet$/i })
  ).toBeInTheDocument();

  const paragraph = screen.getByRole('paragraph');
  expect(paragraph).toBeInTheDocument();
  expect(paragraph).toHaveTextContent(/^you don't have.*beautiful photos.$/i);
});
