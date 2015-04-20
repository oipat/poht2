var React = require('react');

var Navigation = React.createClass({

  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><a href="#home">Homepage</a></li>
            <li><a href="#post">Postpage</a></li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Navigation;
