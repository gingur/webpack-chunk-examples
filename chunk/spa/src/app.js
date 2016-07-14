var React = require('react');
var ReactDOM = require('react-dom');

var Nav = require('./components/Nav');
var Views = require('./components/Views');
var routes = require('./constants/routes');

var ViewComponents = {};

var Application = React.createClass({
  displayName: "Application",
  getInitialState: function getInitialState () {
    return {
      route: routes.DEFAULT,
      current: null
    };
  },
  handleClick: function (event) {
    event.preventDefault();
    this.setState({
      route: routes[event.target.getAttribute('data-route')]
    });
  },
  getView(route){
    return ViewComponents[route];
  },
  loadView(route){
    console.log("Loading view for route ", route);
    Views[route](function (View) {
      ViewComponents[route] = View;
      this.setState({ current: View });
    }.bind(this));
  },
  render: function render () {
    var route = this.state.route;
    var current = this.state.current;
    var View = this.getView(route);

    if (!View) {
      this.loadView(route);
      View = current;
    }

    var Navigation = React.createElement(Nav, { route: route, onClick: this.handleClick });
    var Component = View && React.createElement(View);

    return React.createElement("div", null, Navigation, Component);
  }
});

ReactDOM.render(React.createElement(Application), document.getElementById('app'));