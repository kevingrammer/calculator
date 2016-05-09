import React from 'react';
import { getButtonType } from '../helpers';
import _ from 'lodash';

import ButtonsContainer from './ButtonsContainer';
import Screen from './Screen';
import '../styles.scss';

class CalculatorContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      screenText: '',
      num1: null,
      operator: null,
      prevButton: null,
      calcs: []
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  render() {

    return (
      <div className="outsideContainer">
        <div className="calcContainer">

          <Screen value={this.state.screenText} />

          <ButtonsContainer
            buttonClick={(button) => this.onButtonClick(button)}
            />

        </div>

        <hr />

        <div className="calcsList">
          {this.state.calcs.map((expression, i) => {
            return <p key={i}>{expression}</p>
          })}
        </div>
      </div>
    );
  }

  // Helper method to get the current expression.
  getExpression(state) {
    return state.num1 + ' ' + state.operator + ' ' + state.num2;
  }

  // Evaluates the given expression.
  evaluateExpression(num1, num2, operator) {
    let n1 = Number(num1);
    let n2 = Number(num2);
    let result = '';

    switch(operator) {
      case '+':
        result = n1 + n2;
        break;
      case '-':
        result = n1 - n2;
        break;
      case '/':
        result = n1 / n2;
        break;
      case '*':
        result = n1 * n2;
        break;
    }

    // @todo This needs to move, probably outside the calc container,
    // definitely should not be setting state within this method.
    this.setState({
      calcs: [n1 + ' ' + operator + ' ' + n2 + ' = ' + result, ...this.state.calcs]
    });

    return result;
  }

  onButtonClick (button) {

    let buttonType = getButtonType(button);
    let state = this.state;

    // Regardless of the button clicked, let's keep track of the previous
    // button click.
    let newState = {
      prevButton: button
    };

    switch(buttonType) {
      case 'digit':
        if(state.prevButton === '=') {
          // If we just evaluated an expression, replace the screen text
          // with the new digit, we are starting a new expression.
          newState.screenText = button;
        } else {
          newState.screenText = state.screenText + button;
        }
        this.setState(newState);
        break;

      case 'operator':
        if (state.prevButton === '=') {
          // If we just evaluated an expression, replace the operator
          // and set num1 to the previous result.
          newState.num1 = state.screenText;
          newState.screenText = '';
          newState.operator = button;
          this.setState(newState);

        } else if (!state.screenText.length) {
          // We can't handle negatives yet, need a separate button.

          // if (button === '-') {
          //   newState.screenText = '-';
          //   this.setState(newState);
          // }

        } else if (!state.num1) {
          newState.num1 = Number(state.screenText);
          newState.operator = button;
          newState.screenText = '';
          this.setState(newState);

        }
        // else if (!isNaN(Number(state.screenText))) {
        //   newState.screenText = this.evaluateExpression(state.num1, state.screenText);
        //   this.setState(newState);
        // }
        break;

      case 'evaluate':
        if(state.prevButton === '=') {
          // Repeat the previous calculation.
          newState.screenText = this.evaluateExpression(state.screenText, state.num2, state.operator);

        } else if (state.num1 && state.operator && !isNaN(Number(state.screenText))) {
          // If we have an complete expression, evaluate it.
          newState.screenText = this.evaluateExpression(state.num1, state.screenText, state.operator);
          newState.num1 = null;
          newState.num2 = state.screenText;
        }
        this.setState(newState);
        break;

      default:
        // This shouldn't happen!
        console.log('unhandled button click', button);
        break;
    }
  }
}

export default CalculatorContainer;