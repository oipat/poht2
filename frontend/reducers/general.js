import * as types from '../constants/ActionTypes'

const initialState = {
  fetching: false,
  posting: false,
}

export default function general(state = initialState, action) {
  switch (action.type) {
    case types.POSTS_FETCHING:
      return Object.assign({}, state, { fetching: true })
    case types.POSTS_FETCHED:
      return Object.assign({}, state, { fetching: false })
    default:
      return state
  }
}
