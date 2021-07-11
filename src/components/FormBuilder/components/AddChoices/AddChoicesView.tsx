import React, { FC } from 'react';

import { Choice } from './components';
import { ChoiceItem } from './AddChoices';

interface IProps {
  choices: ChoiceItem[];
}

const AddChoicesView: FC<IProps> = ({ choices }) => {
  return (
    <div>
      {choices.map((choice, index) => {
        return (
          <Choice key={index} label={choice.label} onClick={choice.setValue} />
        );
      })}
    </div>
  );
};

export default AddChoicesView;
