import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import PhotoCard from './PhotoCard';
import __photo__ from '@/mocks/mockData/__photo__.json';

test('renders PhotoCard', () => {
  render(<PhotoCard photo={__photo__} base64='hjdskhjsdhlfjs' />);

  const links = screen.getAllByRole('link');

  expect(screen.getByTestId('photo-card')).toBeInTheDocument();
  expect(links).toHaveLength(1);
  expect(links[0]).toHaveAttribute('href', '/photo/test1');
  expect(screen.getAllByRole('img')).toHaveLength(1);
});

test('renders extra information about photo author and download button when user hovers on photo', async () => {
  const user = userEvent.setup();

  render(<PhotoCard photo={__photo__} base64='sdhjfshjfdkj' />);
  const photoCard = screen.getByTestId('photo-card');

  await user.hover(photoCard);
  const links = screen.getAllByRole('link');

  expect(links).toHaveLength(4);
  expect(links[0]).toHaveAttribute('href', '/photo/test1');
  expect(links[1]).toHaveAttribute('href', 'www.portfolio-url.com');
  expect(links[2]).toHaveAttribute('href', 'www.portfolio-url.com');
  expect(links[3]).toHaveTextContent(/^download$/i);
  expect(links[3]).toHaveAttribute('href', 'https://download.com');
  expect(screen.getAllByRole('img')).toHaveLength(2);

  await user.unhover(photoCard);
  expect(screen.getAllByRole('img')).toHaveLength(1);
  expect(screen.getAllByRole('link')).toHaveLength(1);
});
