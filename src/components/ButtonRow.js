import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonRow = ({ buttonClick, buttons }) => (
  <div className="buttonRow">
    {buttons.map((button) => (
      <Button
        key={'button-' + button}
        button={button}
        buttonClick={buttonClick}
      />
    ))}
  </div>
);

ButtonRow.propTypes = {
  buttonClick: PropTypes.func.isRequired,
  buttons: PropTypes.array.isRequired,
};

export default ButtonRow;
