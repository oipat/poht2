import * as types from '../constants/ActionTypes'

const initialState = [
  {
    id: 1,
    title: 'BlogPostTitle3',
    body: 'BlogPostBody1',
    author: 'Author1'
  },
  {
    id: 2,
    title: 'BlogPostTitle4',
    author: 'Author2',
    body: 'BlogPostBody2'
  },
]

export default function posts(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case types.GET_POSTS:
      return state
    case types.LOAD_POSTS:
      state = action.posts
      return state
    case types.POST_SUBMITTED:
      return state
    case types.POST_SAVED:
      return [
        ...state,
        {
          id: state.reduce((maxId, post) => Math.max(post.id, maxId), -1) + 1,
          title: action.post.title,
          body: action.post.body
        }
      ]
    case types.POSTS_FETCHED:
      return action.posts
    default:
      return state
  }
}
