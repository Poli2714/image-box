import { expect, test } from 'vitest';

import { getDisplayedPageNumbers } from './getDisplayedPageNumbers';

test('returns [1] if total page number is 1', () => {
  expect(getDisplayedPageNumbers(1, 1)).toEqual([1]);
});

test('returns [1, 2] if total page number is 2', () => {
  expect(getDisplayedPageNumbers(1, 2)).toEqual([1, 2]);
});

test('returns [1, 2, 3] if total page number is 3', () => {
  expect(getDisplayedPageNumbers(2, 3)).toEqual([1, 2, 3]);
});

test('resturns [6, 7, 8] if current page is 7 and total page number is 8', () => {
  expect(getDisplayedPageNumbers(7, 9)).toEqual([6, 7, 8]);
});

test('returns [5, 6, 7] if current page is 7 and total page number is 7', () => {
  expect(getDisplayedPageNumbers(7, 7)).toEqual([5, 6, 7]);
});
