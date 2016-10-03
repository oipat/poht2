import * as types from '../constants/ActionTypes';
import makeBlogiApi from '../util/BlogiApi';


const api = makeBlogiApi('http://localhost:5000/blogi/posts');

export function getPosts() {
  return (dispatch) => {
    dispatch({ type: types.POSTS_FETCHING });
    return api.getPosts().then(posts =>
      dispatch({ type: types.POSTS_FETCHED, posts })
    ).catch(error =>
      dispatch({ type: types.POSTS_FETCH_ERROR, error })
    );
  };
}

export function onUpdatePost(post) {
  return (dispatch) => {
    dispatch({ type: types.POST_UPDATING });
    return api.updatePost(post).then(updatedPost =>
      dispatch({ type: types.POST_UPDATED, updatedPost })
    ).catch(error =>
      dispatch({ type: types.POST_SAVE_ERROR, error })
    );
  };
}

export function onSubmitPost(post) {
  return (dispatch) => {
    return api.submitPost(post).then(createdPost =>
      dispatch({ type: types.POST_SAVED, post: createdPost })
    ).catch(error =>
      dispatch({ type: types.POST_SAVE_ERROR, error })
    );
  };
}

export function onHamburgerMenuClick() {
  return { type: types.HAMBURGER_MENU_CLICKED };
}

export function onBodyClick() {
  return { type: types.BODY_CLICKED };
}

export function deleteClicked(postId) {
  return (dispatch) => {
    dispatch({ type: types.POST_DELETING });
    return api.deletePost(postId).then(() =>
      dispatch({ type: types.POST_DELETED, postId })
    ).catch(error =>
        dispatch({ type: types.POST_DELETE_ERROR, error })
    );
  };
}
