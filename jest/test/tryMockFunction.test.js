import tryMockFunction from '../src/js/tryMockFunction.js';

const mockCallback = jest.fn((x) => x + 42);

test('Mock callback function should be invoked twice.', () => {
  tryMockFunction([0, 1], mockCallback);
  expect(mockCallback.mock.calls.length).toBe(2);
  expect(mockCallback.mock.instances.length).toBe(2);
  expect(mockCallback.mock.calls[0][0]).toBe(0);
  expect(mockCallback.mock.calls[1][0]).toBe(1);
  expect(mockCallback.mock.results[0].value).toBe(42);
});

const mockCallback2 = jest.fn();
mockCallback2.mockReturnValueOnce(1).mockReturnValueOnce(2);

test('Mock callback function should return 1 & 2', () => {
  tryMockFunction([0, 1], mockCallback2);
  expect(mockCallback2.mock.results[0].value).toBe(1);
  expect(mockCallback2.mock.results[1].value).toBe(2);
});
