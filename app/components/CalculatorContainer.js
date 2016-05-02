import React from 'react';
import { getButtonType } from '../helpers';
import _ from 'lodash';

import ButtonsContainer from './ButtonsContainer';
import Screen from './Screen';

class CalculatorContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      screenText: '',
      calcString: '',
      result: null,
      num1: null,
      num2: null,
      operator: null
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  render() {

    return (
      <div className="calcContainer">

        <Screen value={this.state.screenText} />

        <ButtonsContainer
          buttonClick={(button) => this.onButtonClick(button)}
          />

      </div>
    );
  }

  setScreenText(text) {
    this.setState({
      screenText: text
    });
  }

  clearScreen() {
    this.setState({
      screenText: ''
    });
  }

  onButtonClick (button) {

    let buttonType = getButtonType(button);
    let state = this.state;

    switch(buttonType) {
      case 'digit':
        this.setScreenText(this.state.screenText + button);
        break;

      case 'operator':
        if(state.num1)
        this.clearScreen();
        break;

      case 'evaluate':
        this.clearScreen();
        break;

      default:
        console.log('unhandled button click', button);
        break;
    }
  }
}

export default CalculatorContainer;