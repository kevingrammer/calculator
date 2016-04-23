import React from 'react';

import Button from './Button';

class ButtonRow extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="buttonRow">

      { this.props.buttons.map(button => {
        return (
          <Button
            key={'button' + button}
            button={button}
            buttonClick={(button) => this.props.buttonClick(button)}
            />
        );
      })}

      </div>
    );
  }

}

export default ButtonRow;