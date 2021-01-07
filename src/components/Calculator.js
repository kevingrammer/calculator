import React from 'react';
import Buttons from './Buttons';
import PropTypes from 'prop-types';

const Screen = ({ value }) => (
  <div className="screen">
    <div className="screenText tooltip">
      {value}
      <span className="tooltiptext">{value}</span>
    </div>
  </div>
);

Screen.propTypes = {
  value: PropTypes.node.isRequired,
};

const Calculator = ({ clearAll, onButtonClick, onClear, screenText }) => (
  <div className="calculator calcContainer">
    <div className="calcTitle">Crapio</div>
    <Screen value={screenText} />
    <Buttons onButtonClick={onButtonClick} />
    <button className="clearButton" onClick={onClear}>
      {clearAll ? 'clear all' : 'clear'}
    </button>
  </div>
);

Calculator.propTypes = {
  clearAll: PropTypes.bool,
  onButtonClick: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  screenText: PropTypes.string,
};

Calculator.defaultProps = {
  clearAll: false,
  screenText: '',
};

export default Calculator;
