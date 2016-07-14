// var React = require('react');
//
// module.exports = function Default () {
//   return React.createElement("h3", null, "Hello from Default Page");
// };

var routes = require('../../constants/routes');

exports[routes.DEFAULT] = require('bundle?lazy&name=default!./Default');
exports[routes.PAGE_1] = require('bundle?lazy&name=p1!./Page1');