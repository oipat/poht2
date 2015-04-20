var React = require('react');
var ListenerMixin = require('alt/mixins/ListenerMixin')

var BlogiStore = require('../stores/BlogiStore');
var BlogiActions = require('../actions/BlogiActions');
var BlogPostList = require('./BlogPostList');


var HomePage = React.createClass({
  mixins: [ListenerMixin],

  getInitialState() {
    return BlogiStore.getState();
  },

  componentDidMount() {
    this.listenTo(BlogiStore, this.onChange);
  },

  onChange() {
    console.debug("HomePage.onChange");
    this.setState(this.getInitialState());
  },

  render: function() {
    console.debug("HomePage.render");
    console.debug(this.state.posts);
    return (
      <div>
        <a href="#" onClick={this._onClick}>lload</a>
        <BlogPostList blogPosts={this.state.posts}></BlogPostList>
      </div>
    );
  },

  _onClick: function() {
    BlogiActions.loadClicked();
  }

});

module.exports = HomePage;
