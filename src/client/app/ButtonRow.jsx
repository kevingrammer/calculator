import React from 'react';

import Button from './Button.jsx';

class ButtonRow extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    console.log('row', this.props.buttons)

    return (
      <div className="buttonRow">

      { this.props.buttons.map(button => {
        return (
          <div key={'button' + button}>

            <Button
              button={button}
              buttonClick={(button) => this.props.buttonClick(button)}
              />

          </div>
          );
      })}

      </div>
    );
  }

}

export default ButtonRow;