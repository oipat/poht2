var React = require('react');
var BlogiStore = require('../stores/BlogiStore');
var BlogiActions = require('../actions/BlogiActions');
var BlogPostList = require('./BlogPostList');


var HomePage = React.createClass({

  render: function() {
    return (
      <div>
        <a href="#" onClick={this._onClick}>lload</a>
        <BlogPostList blogPosts={this.props.posts}></BlogPostList>
      </div>
    );
  },

  _onClick: function() {
    BlogiActions.loadClicked();
  }

});

module.exports = HomePage;
