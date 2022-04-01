import calculator from '../src/js/calculator.js';

test('1 + 2 = 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('3 - 1 = 2', () => {
  expect(calculator.subtract(3, 1)).toBe(2);
});

test('2 * 3 = 6', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test('integer division 6 / 2 = 3', () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test('floating number division -5 / 2 ~ -2.5', () => {
  expect(calculator.divide(-5, 2)).toBeCloseTo(-2.5);
});

test('any number divied by 0, should be undefined', () => {
  expect(calculator.divide(2, 0)).toBeUndefined();
});
