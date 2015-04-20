var React = require('react');
jQuery = require('jquery');
var Bootstrap = require('bootstrap');

var BlogiActions = require('./actions/BlogiActions');
var LocationActions = require('./actions/LocationActions');
var BlogiApp = require('./components/BlogiApp');
var BlogiApi = require('./util/BlogiApi');


window.addEventListener('hashchange', onHashChange);
function onHashChange(e) {
  var newLoc = location.hash.slice(1);
  LocationActions.locationChanged(newLoc);
}

React.render(
  React.createElement(BlogiApp, {}),
  document.getElementById('blogiapp')
)
