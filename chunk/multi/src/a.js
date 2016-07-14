var React = require('react');
var ReactDOM = require('react-dom');

var Nav = require('./components/Nav');
var routes = require('./constants/routes');

var Application = React.createClass({
  displayName: "Application",
  getInitialState: function () {
    return {
      Component: null
    };
  },
  componentDidMount(){
    setImmediate(function () {
      this.Chunk = require('bundle!./components/Chunk');
    }.bind(this));
  },
  handleClick: function (event) {
    event.preventDefault();
    window.location = "b.html";
  },
  handleLoadChunk: function (event) {
    event.preventDefault();
    if (!this.Chunk) {
      return;
    }
    console.log("Loading chunk component");
    this.Chunk(function (Component) {
      this.setState({ Component: Component });
    }.bind(this));
  },
  render: function render () {
    var Component = this.state.Component;
    var ChunkComponent = Component && React.createElement(Component);
    var Heading = React.createElement("h1", null, "Entry A");
    var Navigation = React.createElement(Nav, { route: routes.A, onClick: this.handleClick });
    var Button = !ChunkComponent && React.createElement("button", { onClick: this.handleLoadChunk }, "Load Chunk");
    return React.createElement("div", null, Navigation, Heading, Button, ChunkComponent);
  }
});

ReactDOM.render(React.createElement(Application), document.getElementById('app'));