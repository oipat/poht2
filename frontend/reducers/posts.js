import * as types from '../constants/ActionTypes'

const initialState = [

]

export default function posts(state = initialState, action) {
  switch (action.type) {
    case types.GET_POSTS:
      return state
    case types.POST_SUBMITTED:
      return state
    case types.POST_SAVED:
      return [
        ...state,
        {
          id: action.post._id,
          title: action.post.title,
          body: action.post.body
        }
      ]
    case types.POSTS_FETCHED:
      return action.posts.map(
        post => { return { id: post._id, title: post.title, body: post.body} }
      )
    default:
      return state
  }
}
