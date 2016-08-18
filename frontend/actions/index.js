import 'whatwg-fetch';
import * as types from '../constants/ActionTypes';

function postsFetched(posts) {
  return { type: types.POSTS_FETCHED, posts };
}

function postSaved(post) {
  return { type: types.POST_SAVED, post };
}

export function getPosts() {
  return (dispatch) => {
    dispatch({ type: types.POSTS_FETCHING });
    return fetch('http://localhost:5000/blogi/posts').then(
      response => response.json().then(
        (posts) => {
          setTimeout(() => {
            dispatch(postsFetched(posts));
          }, 400);
        }
      ),
      (error) => dispatch({ type: types.POSTS_FETCH_ERROR, error })
    );
  };
}

export function onSubmitPost(post) {
  return (dispatch) => {
    const request = new Request('http://localhost:5000/blogi/posts', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(post),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
    fetch(request).then(
      (response) => {
        if (response.status === 200) {
          response.json().then(
            responsePost => dispatch(postSaved(responsePost))
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
