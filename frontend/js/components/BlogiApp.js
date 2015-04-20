var React = require('react');
var ListenerMixin = require('alt/mixins/ListenerMixin');

var BlogiStore = require("../stores/BlogiStore");
var LocationStore = require("../stores/LocationStore");
var BlogiActions = require("../actions/BlogiActions");
var LocationActions = require("../actions/LocationActions");
var BlogPostList = require('./BlogPostList');
var Navigation = require('./Navigation');
var HomePage = require('./HomePage');
var PostPage = require('./PostPage');


var BlogiApp = React.createClass({
  mixins: [ListenerMixin],

  getInitialState() {
    var state = LocationStore.getState();
    state.location = location.hash.slice(1);
    return state;
  },

  componentDidMount() {
    this.listenTo(LocationStore, this.onChange);
  },

  onChange(newState) {
    console.debug("BlogiApp.onChange");
    console.debug(this.state);
    this.setState(newState);
  },

  render() {
    var currentView = <HomePage />;
    switch(this.state.location) {
      case 'home':
        currentView = <HomePage />;
        break;
      case 'post':
        currentView = <PostPage />;
        break;
      default:
        currentView = <HomePage />;
    }

    return (
      <div className="container-fluid">
        <header>
          <Navigation />
        </header>
        <section id="content" className="row">
          <div className="col-xs-9">
            {currentView}
          </div>
          <div className="col-xs-3"></div>
        </section>
      </div>
    );
  }

});

module.exports = BlogiApp;
