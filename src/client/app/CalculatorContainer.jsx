import React from 'react';

import ButtonContainer from './ButtonContainer.jsx';
import Screen from './Screen.jsx';

class CalculatorContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      screenText: '',
      result: null,
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  render() {
    return (
      <div className="calcContainer">

        <Screen value={this.state.screenText} />

        <ButtonContainer
          buttonClick={(button) => this.onButtonClick(button)}
          />

      </div>
    );
  }

  onButtonClick (button) {
    let newState = {
      screenText: this.state.screenText + button
    };
    this.setState(newState);
  }

}

export default CalculatorContainer;