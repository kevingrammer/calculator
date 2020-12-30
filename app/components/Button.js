import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e, button) {
    e.preventDefault();
    this.props.buttonClick(this.props.button);
  }

  render() {
    const { button } = this.props;
    return (
      <div className="buttonContainer">
        <button className="button" onClick={this.handleButtonClick}>
          {button}
        </button>
      </div>
    );
  }
}

export default Button;
