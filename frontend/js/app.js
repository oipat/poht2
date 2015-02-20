var React = require('react');
var BlogiApp = require('./components/BlogiApp');
var BlogiApi = require('./util/BlogiApi');
var BlogiActions = require('./actions/BlogiActions');
(window !== window.top ? window.top : window).React = React;

BlogiApi.getBlogPosts(5, BlogiActions.loadPosts);

React.render(
  <BlogiApp />,
  document.getElementById('blogiapp')
);
