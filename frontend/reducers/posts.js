import * as types from '../constants/ActionTypes';

const initialState = [

];

export default function posts(state = initialState, action) {
  switch (action.type) {
    case types.GET_POSTS:
      return state;
    case types.POST_SUBMITTED:
      return state;
    case types.POST_SAVED:
      return [
        Object.assign({ id: post._id }, action.post),
        ...state,
      ];
    case types.POST_UPDATED:
      // Sometimes I wonder whether being all nice
      // and functional is worth it...
      return state.slice(0, state.findIndex(post =>
          post.id === action.post.id))
        .concat(action.post)
        .concat(state.slice(state.findIndex(post =>
          post.id === action.post.id) + 1));
    case types.POST_SAVE_ERROR:
      return state;
    case types.POST_DELETED:
      return state.filter((post) => post.id !== action.postId);
    case types.POSTS_FETCHING:
      return [];
    case types.POSTS_FETCHED:
      return action.posts.map(
        post => Object.assign({ id: post._id }, post)
      );
    default:
      return state;
  }
}
