import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import PhotoCard from './PhotoCard';

const photo = {
  id: 'test1',
  width: 400,
  height: 300,
  alt_description: 'test_desc',
  urls: {
    regular: 'https://test',
    thumb: 'test',
  },
  links: {
    download: 'test.jpeg',
  },
  user: {
    name: 'test name',
    portfolio_url: 'test url',
    links: {
      html: 'test.html',
    },
    profile_image: {
      small: 'https://test.jpeg',
    },
  },
};

test('renders PhotoCard', () => {
  render(<PhotoCard photo={photo} base64='hjdskhjsdhlfjs' />);

  expect(screen.getByTestId('photo-card')).toBeInTheDocument();
  expect(screen.getByRole('img')).toBeInTheDocument();
  expect(screen.getAllByRole('img')).toHaveLength(1);
});

test('renders extra information about photo author and download button when user hovers on photo', async () => {
  const user = userEvent.setup();

  render(<PhotoCard photo={photo} base64='sdhjfshjfdkj' />);
  const photoCard = screen.getByTestId('photo-card');

  await user.hover(photoCard);

  expect(screen.getAllByRole('link')).toHaveLength(4);
  expect(screen.getByRole('link', { name: 'Download' })).toBeInTheDocument();
  expect(screen.getAllByRole('img')).toHaveLength(2);

  await user.unhover(photoCard);
  expect(screen.queryByRole('link')).not.toBeInTheDocument();
  expect(screen.getAllByRole('img')).toHaveLength(1);
});
