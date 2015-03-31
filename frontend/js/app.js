var React = require('react');
var Router = require('react-router');
var BlogiApp = require('./components/BlogiApp');
var BlogiApi = require('./util/BlogiApi');
var BlogiActions = require('./actions/BlogiActions');
var HomePage = require('./components/HomePage');
var PostPage = require('./components/PostPage');
jQuery = require('jquery');
var Bootstrap = require('bootstrap');
console.log(Bootstrap);

(window !== window.top ? window.top : window).React = React;

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

BlogiApi.getBlogPosts(5, BlogiActions.loadPosts);

var routes = (
  <Route name="app" path="/" handler={BlogiApp}>
    <Route name="homepage" handler={HomePage} />
    <Route name="postpage" handler={PostPage} />
    <DefaultRoute handler={HomePage} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
