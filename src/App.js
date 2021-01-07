import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import CalculatorApp from './components/CalculatorApp';
import './styles.scss';

class App extends Component {
  render() {
    return <CalculatorApp />;
  }
}

export default hot(App);
