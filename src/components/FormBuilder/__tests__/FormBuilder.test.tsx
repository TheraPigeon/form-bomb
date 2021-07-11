import React from 'react';
import {
  render,
  fireEvent,
  waitFor,
  screen,
  act,
} from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import FormBuilder from '../index';
import { defaults } from '../config';
import { BombConfig } from '../../../interfaces';

describe('FormBuilder', () => {
  describe('the UI', () => {
    it('should render a "Create Form" button', async () => {
      render(<FormBuilder />);
      const button = await screen.findByText(defaults.submitText);
      expect(button).toBeInTheDocument();
    });

    it('should render a header containing title and description options', async () => {
      render(<FormBuilder />);
      const titleInput = await screen.findByRole('textbox', { name: 'title' });
      const descriptionInput = await screen.findByRole('textbox', {
        name: 'description',
      });

      expect(titleInput).toHaveValue(defaults.formTitle);
      expect(descriptionInput).toHaveValue(defaults.formDescription);
    });
  });

  describe('the create button', () => {
    it('should display text defaultSubmitButtonText when no config object is passed', async () => {
      render(<FormBuilder />);
      const button = await screen.findByText(defaults.submitText);
      expect(button).toBeInTheDocument();
    });

    it('should display text "Create Form" when a config object missing meta.submitText field is passed', async () => {
      render(<FormBuilder config={{ meta: {} }} />);
      const button = await screen.findByText(defaults.submitText);
      expect(button).toBeInTheDocument();
    });

    it('should display text content based on props.config.meta.submitText', async () => {
      const submitText = 'Anything I Want';
      render(<FormBuilder config={{ meta: { submitText: submitText } }} />);
      const button = await screen.findByText(submitText);
      expect(button).toBeInTheDocument();
    });

    it('should call the submit function from props when clicked', async () => {
      const submit = jest.fn();
      await act(async () => {
        render(<FormBuilder onSubmit={submit} />);
        const button = await screen.findByText(defaults.submitText);
        user.click(button);
      });
      expect(submit).toHaveBeenCalled();
    });

    it('should pass the resulting BombConfig object to the submit callback function', async () => {
      let val: BombConfig = { meta: { title: 'mockTitle' } };
      const submit = (config: BombConfig) => {
        val = config;
      };

      await act(async () => {
        render(<FormBuilder onSubmit={submit} />);
        await waitFor(async () => {
          const button = await screen.findByText(defaults.submitText);
          fireEvent.click(button);
        });
      });

      expect(val.meta.title).not.toEqual('mockTitle');
    });
  });
});
