import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { getPosts } from '../actions';
import rootReducer from '../reducers';

export default function configureStore(preloadedState) {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk));

  store.dispatch(getPosts());

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
