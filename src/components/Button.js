import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
    e.preventDefault();
    this.props.buttonClick(this.props.button);
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
  buttonClick: PropTypes.func.isRequired,
};

export default Button;
