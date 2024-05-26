import { expect, test } from 'vitest';

import { formatDate } from './formatDate';

test('formats given string to be  a date inMMMM DD, YYYY style', () => {
  expect(formatDate('2016-01-04T18:16:09-05:00')).toEqual('January 4, 2016');
  expect(formatDate('hello')).toBeNull();
});
