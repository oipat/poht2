import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import MainSection from './containers/MainSection'
import NewPost from './containers/NewPost'
import Nav from './components/Nav'
import configureStore from './store/configureStore'
import App from './containers/App'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={MainSection} />
        <Route path="/newpost" component={NewPost} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
