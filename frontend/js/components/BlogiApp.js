var React = require('react');
var ListenerMixin = require('alt/mixins/ListenerMixin')

var blogiStore = require("../stores/BlogiStore");
var blogiActions = require("../actions/BlogiActions");
var BlogPostList = require('./BlogPostList');
var Navigation = require('./Navigation');
var HomePage = require('./HomePage');

var BlogiApp = React.createClass({
  mixins: [ListenerMixin],

  getInitialState() {
    return blogiStore.getState();
  },

  componentDidMount() {
    this.listenTo(blogiStore, this.onChange);
    blogiActions.loadPosts();
  },

  onChange() {
    this.setState(this.getInitialState())
  },

  render() {
    return (
      <div className="container-fluid">
        <header>
          <Navigation />
        </header>
        <section id="content" className="row">
          <div className="col-xs-9">
            <HomePage posts={this.state.posts} />
          </div>
          <div className="col-xs-3"></div>
        </section>
      </div>
    );
  }

});

module.exports = BlogiApp;
