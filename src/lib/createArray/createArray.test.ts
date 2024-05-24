import { expect, test } from 'vitest';

import { createArray } from './createArray';

test('returns an array with 21 elements(number)', () => {
  expect(createArray(21)).toHaveLength(21);
});
