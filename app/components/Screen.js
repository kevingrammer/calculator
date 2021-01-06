import React from 'react';

const Screen = ({ value }) => (
  <div className="screen">
    <div className="screenText tooltip">
      {value}
      <span className="tooltiptext">{value}</span>
    </div>
  </div>
);

export default Screen;
