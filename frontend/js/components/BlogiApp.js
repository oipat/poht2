var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var BlogPostList = require('./BlogPostList');
var Navigation = require('./Navigation');

var BlogiApp = React.createClass({

  render: function() {
    var page;

    return (
      <div className="container-fluid">
        <header>
          <Navigation />
        </header>
        <section id="content" className="row">
          <div className="col-xs-9">
            <RouteHandler />
          </div>
          <div className="col-xs-3"></div>
        </section>
      </div>
    );
  },

});

module.exports = BlogiApp;
