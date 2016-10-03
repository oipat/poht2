import omit from 'lodash/fp/omit';
import * as types from '../constants/ActionTypes';

const initialState = {
};

function fixIdKey(post) {
  return Object.assign({ id: post._id }, post);
}

export default function posts(state = initialState, action) {
  switch (action.type) {
    case types.GET_POSTS:
      return state;
    case types.POST_SUBMITTED:
      return state;
    case types.POST_SAVED:
      return Object.assign({}, state, { [action.post._id]: fixIdKey(action.post) });
    case types.POST_UPDATED:
      return Object.assign({ [action.updatedPost.id]: action.updatedPost },
         omit(`${action.updatedPost.id}`)(state));
    case types.POST_SAVE_ERROR:
      return state;
    case types.POST_DELETED:
      return omit(`${action.postId}`)(state);
    case types.POSTS_FETCHING:
      return {};
    case types.POSTS_FETCHED:
      const ret = {};
      Object.keys(action.posts).forEach(key => {
        ret[key] = Object.assign({}, action.posts[key], { id: action.posts[key]._id })
      });
      return ret;
    default:
      return state;
  }
}
