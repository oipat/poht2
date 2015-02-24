var React = require('react');
var Link = require('react-router').Link;

var Navigation = React.createClass({

  render: function() {
    return (
      <ul>
        <li><Link to="app">Homepage</Link></li>
        <li><Link to="postpage">Postpage</Link></li>
      </ul>
    );
  }
});

module.exports = Navigation;
