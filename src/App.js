import React, { Component } from "react";
import { hot } from 'react-hot-loader/root';
import CalculatorContainer from './components/CalculatorContainer';
import './styles.scss';

class App extends Component{
  render() {
    return (<CalculatorContainer />);
  }
}

export default hot(App);
