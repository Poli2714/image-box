import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import DownloadLink from './DownloadLink';

test('renders DownloadLink', () => {
  render(<DownloadLink link='https://test.com' />);

  expect(screen.getByRole('link')).toBeInTheDocument();
  expect(screen.getByTestId('download-icon')).toBeInTheDocument();
});
