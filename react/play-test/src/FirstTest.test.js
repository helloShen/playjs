/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import FirstTest from './FirstTest';

test('renders heading', () => {
  const { getByRole } = render(<FirstTest />);
  expect(getByRole('heading').textContent).toMatch('Our First Test.');
});
