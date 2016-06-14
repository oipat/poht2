import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import posts from './posts'
import general from './general'

const rootReducer = combineReducers({
  posts,
  general,
  routing: routerReducer
})

export default rootReducer
