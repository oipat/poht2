var React = require('react');
var Link = require('react-router').Link;

var Navigation = React.createClass({

  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><Link to="app">Homepage</Link></li>
            <li><Link to="postpage">Postpage</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Navigation;
