var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

var BlogPost = React.createClass({
  mixins: [PureRenderMixin],

  propTypes: {
    children: React.PropTypes.object
  },

  render: function() {
    return (
      <div>
        <h3>{this.props.children.title}</h3>
        <p>{this.props.children.author}</p>
        <p>{this.props.children.body}</p>
      </div>
    );
  }

});

module.exports = BlogPost;
