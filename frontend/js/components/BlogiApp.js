var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var BlogPostList = require('./BlogPostList');
var Navigation = require('./Navigation');

var BlogiApp = React.createClass({

  render: function() {
    var page;

    return (
      <div>
        <header>
          <Navigation />
        </header>
        <RouteHandler />
      </div>
    );
  },

});

module.exports = BlogiApp;
