import React from 'react';

import ButtonRow from './ButtonRow.jsx';
import * as constants from '../constants';

class ButtonsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      buttons: constants.BUTTON_MAP
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

export default ButtonsContainer;