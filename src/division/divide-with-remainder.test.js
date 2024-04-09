import {divideWithRemainder} from './divide-with-remainder';

it('divides 0 by 1 with result 0', () => {
  const {result} = divideWithRemainder(0, 1);
  expect(result).toBe(0);
});

it('divides 5 by 3 with result 1', () => {
  const {result} = divideWithRemainder(5, 3);
  expect(result).toBe(1);
});

it('divides 5 by 3 with remainder 2', () => {
  const {remainder} = divideWithRemainder(5, 3);
  expect(remainder).toBe(2);
});

it('throws an exception when diving by 0', () => {
  expect(() => divideWithRemainder(5, 0)).toThrow('Cannot divide by zero.');
});

it('throws an exception when passing non-numeric values', () => {
  expect(() => divideWithRemainder('ahoj', [])).toThrow('Inputs must be numbers');
});

