import React from 'react';
import Button from './Button';

const ButtonRow = ({ buttonClick, buttons }) => (
  <div className="buttonRow">
    {buttons.map(button => (
      <Button
        key={'button-' + button}
        button={button}
        buttonClick={buttonClick}
      />
    ))}
  </div>
);

export default ButtonRow;
