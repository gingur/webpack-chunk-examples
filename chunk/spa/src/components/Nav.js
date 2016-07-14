var React = require('react');
var routes = require('../constants/routes');

module.exports = function Nav (props) {
  var active = props.route;
  var items = Object.keys(routes).map(function (route) {
    var className = '';
    if (routes[route] === active) {
      className += 'active';
    }
    return React.createElement('li', { key: route },
      React.createElement('a', { href: "#", "data-route": route, className: className }, routes[route])
    );
  });
  return React.createElement('ul', { onClick: props.onClick }, items);
};