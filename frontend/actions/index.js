import 'whatwg-fetch';
import * as types from '../constants/ActionTypes';

function generateBaseRequest(path, config) {
  return new Request(`http://localhost:5000/blogi/posts/${path}`,
    Object.assign({ mode: 'cors' }, config));
}

export function getPosts() {
  return (dispatch) => {
    dispatch({ type: types.POSTS_FETCHING });
    return fetch('http://localhost:5000/blogi/posts').then(
      response => response.json().then(
        (posts) => {
          // artificial lag
          setTimeout(() => {
            dispatch({ type: types.POSTS_FETCHED, posts });
          }, 400);
        }
      ),
      (error) => dispatch({ type: types.POSTS_FETCH_ERROR, error })
    );
  };
}

export function onUpdatePost(post) {
  return (dispatch) => {
    const request = generateBaseRequest(`${post.id}`, {
      method: 'PUT',
      body: JSON.stringify(post),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });

    fetch(request).then(
      (response) => {
        if (response.status === 200) {
          dispatch({ type: types.POST_UPDATED, post });
        } else {
          dispatch({ type: types.POST_SAVE_ERROR, response });
        }
      }
    ).catch(
      (error) => {
        dispatch({ type: types.POST_SAVE_ERROR, error });
      }
    );
  };
}

export function onSubmitPost(post) {
  return (dispatch) => {
    const request = generateBaseRequest('', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
    fetch(request).then(
      (response) => {
        if (response.status === 200) {
          response.json().then(
            responsePost =>
              dispatch({ type: types.POST_SAVED, post: responsePost })
          );
        } else {
          dispatch({ type: types.POST_SAVE_ERROR, response });
        }
      }
    ).catch(
      (error) => {
        dispatch({ type: types.POST_SAVE_ERROR, error });
      }
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
    const request = generateBaseRequest(`${postId}`, {
      method: 'DELETE',
    });
    fetch(request).then(
      (response) => {
        if (response.status === 200) {
          dispatch({ type: types.POST_DELETED, postId });
        } else {
          dispatch({ type: types.POST_DELETE_ERROR, response });
        }
      }
    ).catch(
      (error) => {
        dispatch({ type: types.POST_DELETE_ERROR, error });
      }
    );
  };
}
