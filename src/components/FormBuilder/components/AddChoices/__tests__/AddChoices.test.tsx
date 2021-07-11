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

import AddChoices from '../index';
import FormBuilder from '../../../';
import { renderWithFormikBuild } from '../../../../../utils';

describe('AddChoices', () => {
  afterEach(cleanup);
  const onSubmit = jest.fn();

  describe('choices', () => {
    it('should render an "Add Question" button', async () => {
      renderWithFormikBuild(<AddChoices />, onSubmit);

      expect(await screen.findByText('Add Question')).toBeInTheDocument();
    });

    it('should render an "Add Section" button', async () => {
      renderWithFormikBuild(<AddChoices />, onSubmit);

      expect(await screen.findByText('Add Section')).toBeInTheDocument();
    });
  });

  // integration tests
  describe('Add Question Choice Button', () => {
    it('should add an untitled question to the form when clicked', async () => {
      await act(async () => {
        render(<FormBuilder onSubmit={onSubmit} />);
        const button = await screen.findByText('Add Question');
        user.click(button);
      });

      expect(await screen.findByText('Untitled Question')).toBeInTheDocument();
    });
  });

  describe('Add Section Button', () => {
    it('should add an untitled section to the form when clicked', async () => {
      await act(async () => {
        render(<FormBuilder onSubmit={onSubmit} />);
        const button = await screen.findByText('Add Section');
        user.click(button);
      });

      expect(await screen.findByText('Untitled Section')).toBeInTheDocument();
    });
  });
});
