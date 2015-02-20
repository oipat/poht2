var React = require('react');

var BlogPost = React.createClass({

  render: function() {
    return (
      <dt>{this.props.children}</dt>
    );
  }

});

module.exports = BlogPost;
