var React = require('react');

var BlogiActions = require('./actions/BlogiActions');
var BlogiApp = require('./components/BlogiApp');
var BlogiApi = require('./util/BlogiApi');


React.render(
  React.createElement(BlogiApp, {}),
  document.getElementById('blogiapp')
)
