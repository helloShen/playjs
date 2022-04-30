import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ClickButton from "./ClickButton";

describe('App component', () => {
  // snapshot test
  it('renders magnificent monkeys', () => {
    const { container } = render(<ClickButton />);
    expect(container).toMatchSnapshot();
  });
  it ('renders radical rhinos after button click', () => {
    render(<ClickButton />);
    const button = screen.getByRole('button', {
      name: 'Click Me'
    });
    userEvent.click(button);   
    expect(screen.getByRole('heading').textContent)
      .toMatch(/radical rhinos/i);
  });
});