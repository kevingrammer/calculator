import React from 'react';
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

export default Screen;
