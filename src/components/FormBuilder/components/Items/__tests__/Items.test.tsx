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

import Items from '../';
import { renderWithFormikBuild } from '../../../../../utils';
import { BombItemType } from '../../../../../interfaces';
import { defaultBomb } from '../../../config';

describe('Build Items', () => {
  afterEach(cleanup);
  const onSubmit = jest.fn();

  const values = cloneDeep(defaultBomb);
  values.items = [
    {
      type: BombItemType.SECTION,
      name: 'Main Section',
    },
    {
      type: BombItemType.QUESTION,
      name: "What's your name?",
    },
  ];

  it('renders all build items', async () => {
    renderWithFormikBuild(<Items />, onSubmit, cloneDeep(values));
    const sectionName = await screen.findByRole('textbox', {
      name: 'sectionName',
    });
    expect(sectionName).toBeInTheDocument();
    expect(sectionName).toHaveValue('Main Section');

    const question = await screen.findByRole('textbox', {
      name: 'questionName',
    });
    expect(question).toBeInTheDocument();
    expect(question).toHaveValue("What's your name?");
  });
});
