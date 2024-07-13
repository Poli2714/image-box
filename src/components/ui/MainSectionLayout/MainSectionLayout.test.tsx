import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import MainSectionLayout from './MainSectionLayout';

test('renders MainSectionLayout', () => {
  render(
    <MainSectionLayout>
      <div>Test</div>
    </MainSectionLayout>
  );

  expect(screen.getByRole('main')).toBeInTheDocument();
  expect(screen.getByText('Test')).toBeInTheDocument();
});
