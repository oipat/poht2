import * as types from '../constants/ActionTypes'

const initialState = [
  {
    text: 'Use Redux',
    id: 0,
  }
]

export default function posts(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case types.GET_POSTS:
      return state
    case types.LOAD_POSTS:
      return action.posts
    case types.POST_SUBMITTED:
      return state
    case types.POST_SAVED:
      return state
    default:
      return state
  }
}
