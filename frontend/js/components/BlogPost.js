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
        <dt>title: {this.props.children.title}</dt><br/>
        <dt>author: {this.props.children.author}</dt><br/>
        <dt>{this.props.children.body}</dt><br/>
      </div>
    );
  }

});

module.exports = BlogPost;
