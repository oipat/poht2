var React = require('react');

var Navigation = React.createClass({

  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li>Homepage</li>
            <li>Postpage</li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Navigation;
