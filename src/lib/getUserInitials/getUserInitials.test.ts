import { expect, test } from 'vitest';

import { getUserInitials } from './getUserInitials';

test('returns EM when both firstName and lastName are provided', () => {
  expect(getUserInitials('Elgun', 'mehdiyev')).toEqual('EM');
});

test('returns E when only firstname is provided', () => {
  expect(getUserInitials('elgun', null)).toEqual('E');
});

test('returns M when only lastName is provided', () => {
  expect(getUserInitials(undefined, 'mehdiyev')).toEqual('M');
});

test('return empty string when niether firstName nor lastName is provided', () => {
  expect(getUserInitials(undefined, undefined)).toEqual('');
});
