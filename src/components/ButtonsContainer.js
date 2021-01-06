import React from 'react';
import PropTypes from 'prop-types';
import ButtonRow from './ButtonRow';
import { BUTTON_MAP } from '../constants';

const ButtonsContainer = ({ buttonClick, buttons }) => (
  <div className="buttonContainer" role="group" aria-label="calculator buttons">
    {buttons.map((row, i) => (
      <div key={'row' + i}>
        <ButtonRow
          buttons={row}
          buttonClick={buttonClick}
        />
      </div>
    ))}
  </div>
);

ButtonsContainer.propTypes = {
  buttonClick: PropTypes.func.isRequired,
  buttons: PropTypes.array,
};

ButtonsContainer.defaultProps = {
  buttons: BUTTON_MAP,
};

export default ButtonsContainer;
