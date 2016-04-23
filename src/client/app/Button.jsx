import React from 'react';

class Button extends React.Component {

  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  render() {
    return (
      <div className="buttonContainer">

        <button className="button"
          onClick={e => this.handleButtonClick(e, this.props.button)}>
          {this.props.button}
        </button>

      </div>
    );
  }

  handleButtonClick(e, button) {
    e.preventDefault();
    this.props.buttonClick(button);
  }

}

export default Button;