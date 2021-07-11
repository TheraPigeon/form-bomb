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

import Submit from '../';
import { BombConfig } from '../../../../../interfaces';
import { renderWithFormikBuild } from '../../../../../utils';
import { defaultBomb, defaults } from '../../../config';
import { cloneDeep } from 'lodash';

describe('Build Submit Button', () => {
  const onSubmit = jest.fn((values: BombConfig) => {});
  afterEach(cleanup);

  it('displays a label from its label props', async () => {
    const label = 'Create Form';
    renderWithFormikBuild(<Submit label={label} />, onSubmit);
    expect(await screen.findByText(label)).toBeInTheDocument();
  });

  it('displays a default label "submit" when no label props is passed', async () => {
    renderWithFormikBuild(<Submit />, onSubmit);
    expect(await screen.findByText('Submit')).toBeInTheDocument();
  });

  it('calls the OnSubmit function from its props when clicked', async () => {
    await act(async () => {
      renderWithFormikBuild(<Submit />, onSubmit);
      const button = await screen.findByText('Submit');
      user.click(button);
    });

    expect(onSubmit).toHaveBeenCalled();
  });

  it('passes BombConfig values into the submit function when clicked', async () => {
    const testTitle = 'This is a test title';
    let startValues = cloneDeep(defaultBomb);
    const endValues: BombConfig = {
      ...cloneDeep(defaultBomb),
      meta: {
        ...cloneDeep(defaultBomb.meta),
        title: testTitle,
      },
    };

    let subFn = jest.fn((values: BombConfig) => (startValues = values));
    await act(async () => {
      renderWithFormikBuild(<Submit />, subFn, endValues);
      const button = await screen.findByText('Submit');
      user.click(button);
    });

    expect(startValues).toEqual(endValues);
  });
});
