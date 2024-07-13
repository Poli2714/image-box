import { expect, test } from 'vitest';

import { formatSlug } from './formatSlug';

test('returns currentPage 1, formattedQuery and urlQuery as Baku', () => {
  const { currentPage, formattedQuery, urlQuery } = formatSlug('baku');

  expect(currentPage).toEqual(1);
  expect(formattedQuery).toEqual('baku');
  expect(urlQuery).toEqual('baku');
});

test('returns currentPage 15, formattedQuery as "maiden tower" and urlQuery as "maiden-tower', () => {
  const { currentPage, formattedQuery, urlQuery } =
    formatSlug('maiden-tower:pg-15');

  expect(currentPage).toEqual(15);
  expect(formattedQuery).toEqual('maiden tower');
  expect(urlQuery).toEqual('maiden-tower');
});

test('returns currentPage 1, formattedQuery as "maiden tower" and urlQuery as "maiden-tower when user manually enters a non-number character as the page number', () => {
  const { currentPage, formattedQuery, urlQuery } = formatSlug(
    'maiden-tower:pg-hjsdhvjksv'
  );

  expect(currentPage).toEqual(1);
  expect(formattedQuery).toEqual('maiden tower');
  expect(urlQuery).toEqual('maiden-tower');
});

test('returns currentPage 1, formattedQuery as "maiden tower" and urlQuery as "maiden-tower when user manually enters 0 as the page number', () => {
  const { currentPage, formattedQuery, urlQuery } =
    formatSlug('maiden-tower:pg-0');

  expect(currentPage).toEqual(1);
  expect(formattedQuery).toEqual('maiden tower');
  expect(urlQuery).toEqual('maiden-tower');
});

test('returns currentPage 1, formattedQuery as "maiden tower" and urlQuery as "maiden-tower when user manually enters a minus number as the page number', () => {
  const { currentPage, formattedQuery, urlQuery } = formatSlug(
    'maiden-tower:pg--45'
  );

  expect(currentPage).toEqual(1);
  expect(formattedQuery).toEqual('maiden tower');
  expect(urlQuery).toEqual('maiden-tower');
});
