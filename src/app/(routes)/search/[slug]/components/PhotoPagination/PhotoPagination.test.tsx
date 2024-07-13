import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import PhotoPagination from './PhotoPagination';

test('renders PhotoPagination with three page numbers (1, 2, 3), ellipsis (more pages) and next page link, but without previous page link when total page number is 10 and current page number is 1', () => {
  render(
    <PhotoPagination
      currentPage={1}
      slug='baku'
      displayedPageNumbers={[1, 2, 3]}
      totalPages={10}
    />
  );
  expect(screen.getByRole('list')).toBeInTheDocument();

  expect(screen.getAllByRole('listitem')).toHaveLength(5);

  const activePageNumber = screen.getByRole('button');
  expect(activePageNumber).toBeInTheDocument();
  expect(activePageNumber).toHaveTextContent('1');
  expect(activePageNumber).toHaveAttribute('disabled');

  const links = screen.getAllByRole('link');
  expect(links).toHaveLength(3);
  links.forEach((link, i) => {
    expect(link).toHaveTextContent(i === 2 ? /^next$/i : `${i + 2}`);
    expect(link).toHaveAttribute(
      'href',
      i === 2 ? '/search/baku:pg-2' : `/search/baku:pg-${i + 2}`
    );
  });

  expect(screen.getByText(/^more pages$/i)).toBeInTheDocument();
});

test('renders PhotoPagination with previous page link, three page numbers (2, 3, 4), ellipsis (more pages) and next page link when total page number is 10 and current page number is 3', () => {
  render(
    <PhotoPagination
      currentPage={3}
      slug='baku'
      displayedPageNumbers={[2, 3, 4]}
      totalPages={10}
    />
  );

  expect(screen.getAllByRole('listitem')).toHaveLength(6);

  const activePageNumber = screen.getByRole('button');
  expect(activePageNumber).toHaveTextContent('3');
  expect(activePageNumber).toHaveAttribute('disabled');

  const links = screen.getAllByRole('link');
  expect(links).toHaveLength(4);
  expect(links[0]).toHaveTextContent(/^previous$/i);
  expect(links[0]).toHaveAttribute('href', '/search/baku:pg-2');
  expect(links[1]).toHaveTextContent('2');
  expect(links[1]).toHaveAttribute('href', '/search/baku:pg-2');
  expect(links[2]).toHaveTextContent('4');
  expect(links[2]).toHaveAttribute('href', '/search/baku:pg-4');
  expect(links[3]).toHaveTextContent(/^next$/i);
  expect(links[3]).toHaveAttribute('href', '/search/baku:pg-4');

  expect(screen.getByText(/^more pages$/i)).toBeInTheDocument();
});

test('renders PhotoPagination with previous page link, three page numbers (8, 9, 10) and next page link, but without ellipsis (more pages) when total page number is 10 and current page number is 9', () => {
  render(
    <PhotoPagination
      currentPage={9}
      slug='baku'
      displayedPageNumbers={[8, 9, 10]}
      totalPages={10}
    />
  );

  expect(screen.getAllByRole('listitem')).toHaveLength(5);

  const activePageNumber = screen.getByRole('button');
  expect(activePageNumber).toHaveTextContent('9');
  expect(activePageNumber).toHaveAttribute('disabled');

  const links = screen.getAllByRole('link');
  expect(links).toHaveLength(4);
  expect(links[0]).toHaveTextContent(/^previous$/i);
  expect(links[0]).toHaveAttribute('href', '/search/baku:pg-8');
  expect(links[1]).toHaveTextContent('8');
  expect(links[1]).toHaveAttribute('href', '/search/baku:pg-8');
  expect(links[2]).toHaveTextContent('10');
  expect(links[2]).toHaveAttribute('href', '/search/baku:pg-10');
  expect(links[3]).toHaveTextContent(/^next$/i);
  expect(links[3]).toHaveAttribute('href', '/search/baku:pg-10');

  expect(screen.queryByText(/^more pages$/i)).not.toBeInTheDocument();
});

test('renders PhotoPagination with previous page link and three page numbers (8, 9, 10), but without ellipsis (more pages) and next page link when total page number is 10 and current page number is 10', () => {
  render(
    <PhotoPagination
      currentPage={10}
      slug='baku'
      displayedPageNumbers={[8, 9, 10]}
      totalPages={10}
    />
  );

  expect(screen.getAllByRole('listitem')).toHaveLength(4);

  const activePageNumber = screen.getByRole('button');
  expect(activePageNumber).toHaveTextContent('10');
  expect(activePageNumber).toHaveAttribute('disabled');

  const links = screen.getAllByRole('link');
  expect(links).toHaveLength(3);
  expect(links[0]).toHaveTextContent(/^previous$/i);
  expect(links[0]).toHaveAttribute('href', '/search/baku:pg-9');
  expect(links[1]).toHaveTextContent('8');
  expect(links[1]).toHaveAttribute('href', '/search/baku:pg-8');
  expect(links[2]).toHaveTextContent('9');
  expect(links[2]).toHaveAttribute('href', '/search/baku:pg-9');

  expect(screen.queryByText(/^more pages$/i)).not.toBeInTheDocument();
});

test('renders PhotoPagination with three page numbers (1, 2, 3) and next page link, but without previous page link and ellipsis (more pages) when total page number is 3 and current page number is 1', () => {
  render(
    <PhotoPagination
      currentPage={1}
      slug='baku'
      displayedPageNumbers={[1, 2, 3]}
      totalPages={3}
    />
  );

  expect(screen.getAllByRole('listitem')).toHaveLength(4);

  const activePageNumber = screen.getByRole('button');
  expect(activePageNumber).toHaveTextContent('1');
  expect(activePageNumber).toHaveAttribute('disabled');

  const links = screen.getAllByRole('link');
  expect(links).toHaveLength(3);
  expect(links[0]).toHaveTextContent('2');
  expect(links[0]).toHaveAttribute('href', '/search/baku:pg-2');
  expect(links[1]).toHaveTextContent('3');
  expect(links[1]).toHaveAttribute('href', '/search/baku:pg-3');

  expect(screen.queryByText(/^more pages$/i)).not.toBeInTheDocument();
});

test('renders PhotoPagination with only one page number (1), but without previous page link, ellipsis (more pages) and next page link when total page number is 1 and current page number is 1', () => {
  render(
    <PhotoPagination
      currentPage={1}
      slug='baku'
      displayedPageNumbers={[1]}
      totalPages={1}
    />
  );

  expect(screen.getAllByRole('listitem')).toHaveLength(1);

  const activePageNumber = screen.getByRole('button');
  expect(activePageNumber).toHaveTextContent('1');
  expect(activePageNumber).toHaveAttribute('disabled');

  const links = screen.queryAllByRole('link');
  expect(links).toHaveLength(0);

  expect(screen.queryByText(/^more pages$/i)).not.toBeInTheDocument();
});
