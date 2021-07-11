import React from 'react';
import {
  render,
  fireEvent,
  waitFor,
  screen,
  act,
  cleanup,
} from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import Choice from '../';
import { renderWithFormikBuild } from '../../../../../../../utils';
import { BombConfig } from '../../../../../../../interfaces';

describe('Add Choice', () => {
  afterEach(cleanup);
  const onSubmit = jest.fn((values: BombConfig) => {});

  it('renders a choice label based on its choice prop', async () => {
    const label = 'Test Choice';
    renderWithFormikBuild(<Choice label={label} />, onSubmit);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('calls the function from onClick prop when clicked', async () => {
    const onClick = jest.fn();
    const label = 'Add Section';
    await act(async () => {
      renderWithFormikBuild(
        <Choice label={label} onClick={onClick} />,
        onSubmit
      );
      const button = await screen.findByText(label);
      user.click(button);
    });

    expect(onClick).toHaveBeenCalled();
  });
});
