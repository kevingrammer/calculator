// Hardcoded data.
var data = {
  buttons: [
    [ '1', '2', '3', '/' ],
    [ '4', '5', '6', '*' ],
    [ '7', '8', '9', '-' ],
    [ '0', '.', '=', '+' ]
  ]
};

var Calculator = React.createClass({
  getInitialState: function() {
    return {
      screenValue: '234',
      result: null
    };
  },
  render: function() {
    return (
      <div>
        <Screen value={this.state.screenValue} />
        <ButtonGrid buttons={data.buttons} />
      </div>
    );
  }
});

// Screen to display current value or result.
var Screen = React.createClass({
  render: function() {
    return (
      <div id="screen">{this.props.value}</div>
    );
  }
});

// A single button.
var Button = React.createClass({
  handleClick: function(id) {
  },
  render: function() {
    return (
      <div className="buttonContainer">
        <button className="button" onclick={this.handleClick(this.props.id)}>
          {this.props.id}
        </button>
      </div>
    );
  }
});

// A row of buttons.
var ButtonRow = React.createClass({
  render: function() {
    var buttons = this.props.buttons;
    return (
      <div className="buttonRow">
        {buttons.map(function(id) {
          return (
            <span key={id}>
              <Button key={id} id={id} />
            </span>)
        })}
      </div>
    );
  }
});

// A matrix of buttons.
var ButtonGrid = React.createClass({
  render: function() {
    var buttons = this.props.buttons;
    var createKey = function(row) {
      return row.join('');
    }
    return (
      <div className="buttonGrid">
        {buttons.map(function(bRow) {
            return (
              <div key={createKey(bRow)}>
                <ButtonRow buttons={bRow} />
              </div>
            );
          })
        }
      </div>
    );
  }
});

ReactDOM.render(
  <Calculator />,
  document.getElementById('calculator')
);