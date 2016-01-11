var data = {
  buttons: [
    [ '7', '8', '9', '/' ],
    [ '4', '5', '6', '*' ],
    [ '1', '2', '3', '-' ],
    [ '0', '.', '=', '+' ]
  ]
};

var Calculator = React.createClass({
  getInitialState: function() {
    return {
      screenValue: '123',
      result: null
    };
  },
  render: function() {
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <Screen value={this.state.screenValue} />
            </td>
          </tr>
          <ButtonGrid buttons={data.buttons} />
        </tbody>
      </table>
    );
  }
});

var Screen = React.createClass({
  render: function() {
    return (
      <div id="screen">
        {this.props.value}
      </div>
    );
  }
});

var Button = React.createClass({
  handleClick: function(id) {
  },
  render: function() {
    return (
      <div className="button">
        <button onclick={this.handleClick(this.props.id)}>
          {this.props.id}
        </button>
      </div>
    );
  }
});

var ButtonRow = React.createClass({
  render: function() {
    var buttons = this.props.buttons;
    return (
      <tr>
        {buttons.map(function(id) {
          return (<td><Button key={id} id={id} /></td>)
        })}
      </tr>
    );
  }
});

var ButtonGrid = React.createClass({
  render: function() {
    var buttons = this.props.buttons.map(function(bRow) {
      return (
        <ButtonRow buttons={bRow} />
      );
    });
    return (
      <table>{buttons}</table>
    );
  }
});

ReactDOM.render(
  <Calculator />,
  document.getElementById('calculator')
);