import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import PhotoGrid from './PhotoGrid';

const photos = [
  {
    id: 'test1',
    width: 400,
    height: 300,
    alt_description: 'test1_desc',
    urls: {
      regular: 'https://test1',
      thumb: 'test1',
    },
    links: {
      download: 'test1.jpeg',
    },
    user: {
      name: 'test1 name',
      portfolio_url: 'test1 url',
      links: {
        html: 'test1.html',
      },
      profile_image: {
        small: 'https://test1.jpeg',
      },
    },
  },
  {
    id: 'test2',
    width: 400,
    height: 300,
    alt_description: 'test2_desc',
    urls: {
      regular: 'https://test2',
      thumb: 'test2',
    },
    links: {
      download: 'test2.jpeg',
    },
    user: {
      name: 'test2 name',
      portfolio_url: 'test2 url',
      links: {
        html: 'test2.html',
      },
      profile_image: {
        small: 'https://test2.jpeg',
      },
    },
  },
];
const base84results = ['bdsjkfdskjf', 'hjsdhfjksdhfkjs'];

test('renders PhotoGrid', () => {
  render(<PhotoGrid photos={photos} base84results={base84results} />);

  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(2);
});
