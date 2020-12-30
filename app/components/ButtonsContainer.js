import React from 'react';
import ButtonRow from './ButtonRow';
import { BUTTON_MAP } from '../constants';

const ButtonsContainer = ({ buttonClick, buttons }) => (
  <div className="buttonContainer">
    {BUTTON_MAP.map((row, i) => (
      <div key={'row' + i}>
        <ButtonRow
          buttons={row}
          buttonClick={buttonClick}
        />
      </div>
    ))}
  </div>
);
export default ButtonsContainer;
