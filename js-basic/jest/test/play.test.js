/* eslint-disable no-console */
/* eslint-disable import/first */
jest.mock('../src/js/grid');
import Grid from '../src/js/grid';
// import Point from '../src/js/point';

describe('Mock object', () => {
  const obj = jest.mock();
  console.dir(`Mock object: ${obj}`);
  test('Mocked object is truthy.', () => {
    expect(obj).toBeTruthy();
  });
});

describe('Mock function', () => {
  const fn = jest.fn((x) => x + 42);
  console.dir(`Mock function: ${fn}`);
  test('fn(8) = 50', () => {
    expect(fn(8)).toBe(50);
  });
  test('Inspect the result of mock\'s first involkation.', () => {
    expect(fn.mock.results[0].value).toBe(50);
  });
  test('Mock a new implementation for fn, now it always return 3', () => {
    fn.mockImplementation(() => 3);
    expect(fn(8)).toBe(3);
  });
});

describe('Mock Grid module from template __mocks__/grid.js', () => {
  const grid = Grid(1, 2);
  test('grid.row() = 1', () => {
    expect(grid.row()).toBe(1);
  });
  test('grid.column() = 2', () => {
    expect(grid.column()).toBe(2);
  });
});
