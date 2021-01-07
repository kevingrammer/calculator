import React, { Component } from 'react';
import PropTypes from 'prop-types';

const BUTTON_MAP = [
  ['1', '2', '3', '/'],
  ['4', '5', '6', '*'],
  ['7', '8', '9', '-'],
  ['0', '.', '=', '+'],
];

// Button
class Button extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
    e.preventDefault();
    this.props.onButtonClick(this.props.button);
  }

  render() {
    const { button } = this.props;
    return (
      <div className="buttonContainer">
        <button
          className="button"
          onClick={this.handleButtonClick}
          tabIndex={0}
        >
          {button}
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  button: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

// ButtonRow
const ButtonRow = ({ buttons, onButtonClick }) => (
  <div className="buttonRow">
    {buttons.map((button) => (
      <Button
        key={button}
        button={button}
        onButtonClick={onButtonClick}
      />
    ))}
  </div>
);

ButtonRow.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  buttons: PropTypes.array.isRequired,
};

// Buttons
const Buttons = ({ buttons, onButtonClick }) => (
  <div className="buttonContainer" role="group" aria-label="calculator buttons">
    {buttons.map((row, i) => (
      <div key={'row' + i}>
        <ButtonRow buttons={row} onButtonClick={onButtonClick} />
      </div>
    ))}
  </div>
);

Buttons.propTypes = {
  buttons: PropTypes.array,
  onButtonClick: PropTypes.func.isRequired,
};

Buttons.defaultProps = {
  buttons: BUTTON_MAP,
};

export default Buttons;
