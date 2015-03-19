var React = require('react');
var BlogiStore = require('../stores/BlogiStore');
var BlogiActions = require('../actions/BlogiActions');
var BlogPostList = require('./BlogPostList');

function getAppState() {
  return {
    posts: BlogiStore.getPosts(),
    // submitPending: BlogiStore.isSubmitPending()
  };
}

var HomePage = React.createClass({

  getInitialState: function() {
    return getAppState();
  },

  componentDidMount: function() {
    BlogiStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    BlogiStore.removeChangeListener(this._onChange);
  },

  loadClicked: function() {
    BlogiActions.loadClicked();
  },

  render: function() {
    return (
      <div>
        <a href="#" onClick={this.loadClicked}>lload</a>
        <BlogPostList blogPosts={this.state.posts}></BlogPostList>
      </div>
    );
  },

  _onChange: function() {
    this.setState(getAppState());
  }

});

module.exports = HomePage;
