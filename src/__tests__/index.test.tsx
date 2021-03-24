import React from 'react';

import { screen, render } from '@testing-library/react';

// Used to simulate user events
import userEvent from '@testing-library/user-event';

describe('Test button successfully', () => {
  it('should be able to render button', () => {
    const titleText = 'Hello World';

    render(<button>{titleText}</button>);

    const element = screen.getByRole('button', { name: titleText });

    // Expects to find the element in the window document
    expect(element).toBeInTheDocument();
  });

  it('should call function on click button successfully', () => {
    const titleText = 'Hello World';
    const onClick = jest.fn();

    render(<button onClick={onClick}>{titleText}</button>);

    const button = screen.getByRole('button', { name: titleText });

    userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
