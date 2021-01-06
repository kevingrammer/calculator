import React, { Component } from 'react';
import { render } from 'react-dom';
import './styles.scss';

import CalculatorContainer from './components/CalculatorContainer';

class App extends Component {
  render() {
    return <CalculatorContainer />;
  }
}

render(<App />, document.getElementById('app'));
