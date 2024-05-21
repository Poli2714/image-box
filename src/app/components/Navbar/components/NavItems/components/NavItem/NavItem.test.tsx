import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import NavItem from './NavItem';

test('renders NavItem', () => {
  render(<NavItem href='/' label='Home' />);

  expect(screen.getByRole('link')).toBeInTheDocument();
});
