import { GET_POSTS, LOAD_POSTS } from '../constants/ActionTypes'

const initialState = [
  {
    text: 'Use Redux',
    id: 0,
  }
]

export default function posts(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case GET_POSTS:
      return state
    case LOAD_POSTS:
      return action.posts
    default:
      return state
  }
}
