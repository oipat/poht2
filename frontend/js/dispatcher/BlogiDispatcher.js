var Dispatcher = require('flux').Dispatcher;

var BlogiDispatcher = new Dispatcher();

BlogiDispatcher.handleAction = function(action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
}

module.exports = BlogiDispatcher;
