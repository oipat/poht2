var React = require('react');
var BlogPost = require('./BlogPost');
var BlogiStore = require('../stores/BlogiStore');


var BlogPostList = React.createClass({

  render: function() {
    return (
      <dl>
        {this.props.blogPosts.map(function(blogPost, i) {
            return <BlogPost key={i}>{blogPost}</BlogPost>;
        })}
      </dl>
    );
  }

});

module.exports = BlogPostList;
