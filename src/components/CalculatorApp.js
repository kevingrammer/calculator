import React, { Component } from 'react';
import Calculator from './Calculator';

const getButtonType = (buttonId) => {
  switch (buttonId) {
    case '/':
    case '*':
    case '-':
    case '+':
      return 'operator';
    case '=':
      return 'evaluate';
    default:
      return 'digit';
  }
};

const shouldClearAll = ({ calcs, num1, prevButton, screenText }) => {
  return (
    prevButton === 'clear' && !screenText && (calcs.length > 0 || num1 !== null)
  );
};

class CalculatorApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenText: '',
      num1: null,
      operator: null,
      prevButton: null,
      calcs: [],
    };
    this.onButtonClick = this.onButtonClick.bind(this);
    this.clear = this.clear.bind(this);
  }

  clear() {
    if (shouldClearAll(this.state)) {
      this.setState({
        screenText: '',
        num1: null,
        operator: null,
        prevButton: null,
        calcs: [],
      });
    } else {
      this.setState({
        screenText: '',
        operator: null,
        prevButton: 'clear',
      });
    }
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

    switch (operator) {
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

    this.setState({
      calcs: [
        n1 + ' ' + operator + ' ' + n2 + ' = ' + result,
        ...this.state.calcs,
      ],
    });

    return result;
  }

  onButtonClick(button) {
    const buttonType = getButtonType(button);
    const {
      num1,
      num2,
      operator,
      prevButton,
      screenText,
      showingResult,
    } = this.state;

    // Regardless of the button clicked, let's keep track of the previous
    // button click.
    let newState = {
      prevButton: button,
    };

    switch (buttonType) {
      case 'digit':
        if (prevButton === '=') {
          // If we just evaluated an expression, replace the screen text
          // with the new digit, we are starting a new expression.
          newState.screenText = button;
        } else {
          newState.screenText = showingResult ? button : screenText + button;
          newState.showingResult = false;
        }
        this.setState(newState);
        break;

      case 'operator':
        if (prevButton === '=') {
          // If we just evaluated an expression, replace the operator
          // and set num1 to the previous result.
          newState.num1 = screenText;
          newState.screenText = '';
          newState.operator = button;
          this.setState(newState);
        } else if (!screenText.length) {
          // We can't handle negatives yet, need a separate button.
          // if (button === '-') {
          //   newState.screenText = '-';
          //   this.setState(newState);
          // }
        } else if (!num1) {
          newState.num1 = Number(screenText);
          newState.operator = button;
          newState.screenText = '';
          this.setState(newState);
        } else if (!isNaN(Number(screenText))) {
          // Handles the case where user inputs "3,+,5,-",
          // should display result of "3+5" and setup "{result} - ".
          let result = this.evaluateExpression(num1, screenText, operator);
          // @todo Should display the result as screen text, but will need to
          // implement a new way to know when previous action was evaluating
          // an expression so that the next digit entered will replace the
          // screen text.
          newState.screenText = result;
          newState.showingResult = true;
          newState.num1 = result;
          newState.operator = button;
          this.setState(newState);
        }
        break;

      case 'evaluate':
        if (prevButton === '=') {
          // Repeat the previous calculation.
          if (!isNaN(Number(screenText)) && num2 && operator) {
            newState.screenText = this.evaluateExpression(
              screenText,
              num2,
              operator
            );
          }
        } else if (
          num1 &&
          operator &&
          screenText.length &&
          !isNaN(Number(screenText))
        ) {
          // If we have an complete expression, evaluate it.
          newState.screenText = this.evaluateExpression(
            num1,
            screenText,
            operator
          );
          newState.num1 = null;
          newState.num2 = screenText;
        }
        this.setState(newState);
        break;

      default:
        // This shouldn't happen!
        console.error('Unhandled button click', { button }); // eslint-disable-line no-console
        break;
    }
  }

  render() {
    return (
      <div className="outsideContainer">
        <Calculator
          clearAll={shouldClearAll(this.state)}
          onButtonClick={this.onButtonClick}
          onClear={this.clear}
          screenText={this.state.screenText}
        />

        <hr />

        <div className="calcsList">
          {this.state.calcs.map((expression, i) => {
            return <p key={i}>{expression}</p>;
          })}
        </div>
      </div>
    );
  }
}

export default CalculatorApp;
