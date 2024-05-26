import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CollectionsToAddRemove from './CollectionsToAddRemove';

test('renders CollectionsToAddRemove', () => {
  render(<CollectionsToAddRemove />);

  expect(screen.getByRole('heading', { level: 2 }));
  expect(screen.getByRole('button')).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 3 }));
  expect(screen.getAllByRole('paragraph').length).toEqual(1);
  expect(screen.getByRole('paragraph').textContent).toMatch(/\sphotos$/);
  expect(screen.queryByTestId('minus-icon')).not.toBeInTheDocument();
});

test('renders minus icon and remove text when user hovers on button', async () => {
  const user = userEvent.setup();

  render(<CollectionsToAddRemove />);
  const button = screen.getByRole('button');

  await user.hover(button);
  const paragraphs = screen.getAllByRole('paragraph');
  expect(screen.getByTestId('minus-icon')).toBeInTheDocument();
  expect(paragraphs.length).toEqual(2);
  expect(paragraphs[paragraphs.length - 1].textContent).toEqual('Remove');
});

test('renders CollectionsToAddRemove content correctly when user unhovers', async () => {
  const user = userEvent.setup();

  render(<CollectionsToAddRemove />);
  const button = screen.getByRole('button');

  await user.hover(button);
  await user.unhover(button);
  expect(screen.queryByTestId('minus-icon')).not.toBeInTheDocument();
  expect(screen.getAllByRole('paragraph').length).toEqual(1);
});
