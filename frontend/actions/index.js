import 'whatwg-fetch';
import * as types from '../constants/ActionTypes';

function postsFetched(posts) {
  return { type: types.POSTS_FETCHED, posts };
}

function errorLoadingPosts(error) {
  return { type: types.POSTS_FETCH_ERROR, error };
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
          }, 800);
        }
      ),
      (error) => dispatch(errorLoadingPosts(error))
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
      (response) => (
        response.status === 200 ?
          response.json().then(
            responsePost => dispatch(postSaved(responsePost))
          ) :
          dispatch({ type: types.POST_SAVE_ERROR, response })
      )
    );
  };
}

export function onHamburgerMenuClick() {
  return { type: types.HAMBURGER_MENU_CLICKED };
}

export function onBodyClick() {
  return { type: types.BODY_CLICKED };
}
