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

import BuildHeader from '../';
import { defaults, defaultBomb } from '../../../config';
import { renderWithFormikBuild } from '../../../../../utils';
import { BombConfig } from '../../../../../interfaces';

describe('BuildHeader', () => {
  afterEach(() => cleanup());
  const onSubmit = jest.fn();

  it('Displays a default form title when no title props is passed', () => {
    renderWithFormikBuild(<BuildHeader />, onSubmit);

    expect(screen.getByRole('textbox', { name: 'title' })).toHaveValue(
      defaults.formTitle
    );
  });

  it('Displays a custom form title when title prop is passed', () => {
    const customTitle = 'Custom Title';
    const values: BombConfig = { ...defaultBomb };
    values.meta.title = customTitle;
    renderWithFormikBuild(<BuildHeader />, onSubmit, values);

    expect(screen.getByRole('textbox', { name: 'title' })).toHaveValue(
      customTitle
    );
  });

  it('Displays a default form description when no description props is passed', () => {
    renderWithFormikBuild(<BuildHeader />, onSubmit);

    expect(screen.getByRole('textbox', { name: 'description' })).toHaveValue(
      defaults.formDescription
    );
  });

  it('Displays a custom form description when description prop is passed', () => {
    const customDescription = 'Custom Description';
    const values: BombConfig = { ...defaultBomb };
    values.meta.description = customDescription;
    renderWithFormikBuild(<BuildHeader />, onSubmit, values);

    expect(screen.getByRole('textbox', { name: 'description' })).toHaveValue(
      customDescription
    );
  });

  it('Displays the updated title value when the user types in the title input', async () => {
    const values: BombConfig = {
      ...defaultBomb,
      meta: { title: '', description: '' },
    };
    const newTitle = 'New Title';
    const { findByRole } = renderWithFormikBuild(
      <BuildHeader />,
      onSubmit,
      values
    );
    const input = await findByRole('textbox', { name: 'title' });
    await user.type(input, newTitle, { delay: 1 });

    expect(input).toHaveValue(newTitle);
  });

  it('Displays the updated description value when the user types in the description input', async () => {
    const values: BombConfig = {
      ...defaultBomb,
      meta: { title: '', description: '' },
    };
    const newDescription = 'New Description';
    const { findByRole } = renderWithFormikBuild(
      <BuildHeader />,
      onSubmit,
      values
    );
    const input = await findByRole('textbox', { name: 'description' });
    await user.type(input, newDescription, { delay: 1 });

    expect(input).toHaveValue(newDescription);
  });
});
