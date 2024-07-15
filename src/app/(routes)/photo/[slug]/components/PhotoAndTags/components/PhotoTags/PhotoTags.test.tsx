import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import PhotoTags from './PhotoTags';

const tags = [
  {
    title: 'test1',
  },
  {
    title: 'test2',
  },
  {
    title: 'test3',
  },
];

const tags2 = [
  {
    title: 'test 1',
  },
  {
    title: 'test 2',
  },
  {
    title: 'test 3',
  },
];

test('renders PhotoTags', () => {
  render(<PhotoTags tags={tags} />);

  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(3);

  const links = screen.getAllByRole('link');
  expect(links).toHaveLength(3);
  links.forEach((link, i) => {
    expect(link).toHaveAttribute('href', `/search/${tags[i].title}`);
  });
});

test('renders PhotoTags with formatted tags inside link href', () => {
  render(<PhotoTags tags={tags2} />);

  const links = screen.getAllByRole('link');
  expect(links).toHaveLength(3);
  links.forEach((link, i) => {
    expect(link).toHaveAttribute('href', `/search/test-${i + 1}`);
  });
});
