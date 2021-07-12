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
import { cloneDeep } from 'lodash';

import { defaultBomb } from '../config';
import FormBuilder from '../';

describe('Question items in the FormBuilder', () => {
  const submit = jest.fn();

  it('defaults new questions to be of type MULTIPLE_CHOICE when no defaultQuestion type is specified', async () => {
    await act(async () => {
      render(<FormBuilder onSubmit={submit} />);
      const button = await screen.findByText('Add Question');
      user.click(button);
    });

    const option = await screen.findByLabelText('questionOption0');
    expect(option).toBeInTheDocument();
    expect(option).toHaveValue('Option 1');
  });
});
