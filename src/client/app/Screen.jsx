import React from 'react';

class Screen extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="screen">
        <div className="screenText">
          {this.props.value}
        </div>
      </div>
    );
  }
}

export default Screen;