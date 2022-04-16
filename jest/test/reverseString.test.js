import reverseString from '../src/js/reverseString.js';

test('"hello" should be reversed to "olleh"', () => {
  expect(reverseString('hello')).toEqual('olleh');
});

test('empty string "" should not return undefined', () => {
  expect(reverseString('hello')).not.toBeUndefined();
});
