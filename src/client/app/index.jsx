import React from 'react';
import { render } from 'react-dom';

import CalculatorContainer from './components/CalculatorContainer.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <CalculatorContainer />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));