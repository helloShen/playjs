/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import MyCallback from './MyCallback';

describe('MyCallback Component', () => {
  it('calls onChange correct number of times', () => {
    const onChangeMock = jest.fn();
    render(<MyCallback
      onChange={onChangeMock}
    />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'Lion');
    expect(onChangeMock).toHaveBeenCalledTimes(4);
  });
  it('calls onChange with correct arguments on each input', () => {
    const onChangeMock = jest.fn();
    render(<MyCallback
      onChange={onChangeMock}
    />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'Ox');
    expect(onChangeMock).toHaveBeenNthCalledWith(1, 'O');
    expect(onChangeMock).toHaveBeenNthCalledWith(2, 'Ox');
  });
  it('input has correct values', () => {
    const onChangeMock = jest.fn();
    render(<MyCallback
      onChange={onChangeMock}
    />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'Whale');
    expect(input).toHaveValue('Whale');
  });
});


