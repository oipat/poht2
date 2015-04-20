var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var BlogPost = require('./BlogPost');
var BlogiStore = require('../stores/BlogiStore');


var BlogPostList = React.createClass({
  mixins: [PureRenderMixin],

  propTypes: {
    blogPosts: React.PropTypes.array
  },

  render: function() {
    console.log("BlogPostList.render");
    console.debug(this.props.blogPosts);
    return (
      <dl>
        {
          this.props.blogPosts.map(function(blogPost, i) {
            return <BlogPost key={i}>{blogPost}</BlogPost>;
          })
        }
      </dl>
    );
  }

});

module.exports = BlogPostList;
