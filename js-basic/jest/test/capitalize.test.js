import capitalize from '../src/js/capitalize.js';

test('"hello" should be converted to "Hello"', () => {
  expect(capitalize('hello')).toEqual('Hello');
});
