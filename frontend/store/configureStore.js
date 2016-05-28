import { createStore } from 'redux'
import { getPosts } from '../actions'
import rootReducer from '../reducers'
import * as types from '../constants/ActionTypes'

export default function configureStore(preloadedState) {
  const store = createStore(rootReducer, preloadedState)

  store.dispatch({type: types.GET_POSTS})
  getPosts(5, function(posts) {
    store.dispatch({type: types.LOAD_POSTS, posts})
  });

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
