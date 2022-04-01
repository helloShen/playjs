import ceasarCipher from '../src/js/caesarCipher.js';

test('Base case: "hello" shift 1 to "ifmmp"', () => {
  expect(ceasarCipher('hello', 1)).toEqual('ifmmp');
});

test('Negative offset value: "a" shift -1 to be "z"', () => {
  expect(ceasarCipher('a', -1)).toEqual('z');
});

test('Large offset value: "a" right shift 100 should move 22 steps, whichi is "w"', () => {
  expect(ceasarCipher('a', 100)).toEqual('w');
});

test('Very small negative offset number: "a" left shift 100 should move 22 steps, whichi is "e"', () => {
  expect(ceasarCipher('a', -100)).toEqual('e');
});

test('Keep the same value: "a" still being "a"', () => {
  expect(ceasarCipher('a', 0)).toEqual('a');
});

test('Uppercase: "A" shift 1 to be "B"', () => {
  expect(ceasarCipher('A', 1)).toEqual('B');
});

test('Long phrase with white space and punctuations: "Hello world!" should become "Ifmmp xpsme!', () => {
  expect(ceasarCipher('Hello world!', 1)).toEqual('Ifmmp xpsme!');
});

test('Empty string remains the same.', () => {
  expect(ceasarCipher('', 1)).toEqual('');
});
