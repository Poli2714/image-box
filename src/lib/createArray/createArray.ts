import { cache } from 'react';

export const createArray = cache((number: number) => {
  let arr = [];

  for (let i = 0; i < number; i++) {
    arr.push(i);
  }

  return arr;
});
