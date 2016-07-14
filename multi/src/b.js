var React = require('react');
var ReactDOM = require('react-dom');

function Application(){
  return React.createElement('h1', null, 'Entry B');
}

ReactDOM.render(React.createElement(Application), document.getElementById('app'));