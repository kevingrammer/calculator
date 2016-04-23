import React from 'react';

import ButtonRow from './ButtonRow.jsx';

class ButtonContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        [ '1', '2', '3', '/' ],
        [ '4', '5', '6', '*' ],
        [ '7', '8', '9', '-' ],
        [ '0', '.', '=', '+' ]
      ]
    };
  }

  render() {

    return (
      <div className="buttonContainer">

      { this.state.buttons.map((row, i) => {
        return (
          <div key={'row' + i}>

            <ButtonRow
              buttons={row}
              buttonClick={(button) => this.props.buttonClick(button)}
              />

          </div>
        );
      })}

      </div>
    );
  }

}

export default ButtonContainer;