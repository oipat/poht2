import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import MainSection from './containers/MainSection';
import PostForm from './containers/PostForm';
import configureStore from './store/configureStore';
import App from './containers/App';
import './style.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={MainSection} />
        <Route path="/newpost" component={PostForm} />
        <Route path="/viewpost/:id" component={MainSection} />
        <Route path="/editpost/:id" component={PostForm} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
