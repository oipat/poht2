import * as types from '../constants/ActionTypes'

export function getPosts() {
  return function(dispatch) {
    return fetchPosts().then(
      response => response.json().then(
        posts => dispatch(postsFetched(posts))
      ),
      error => dispatch(errorLoadingPosts(error))
    )
  }
}

function fetchPosts() {
  return fetch('http://localhost:5000/blogi/posts')
}

function postsFetched(posts) {
  return { type: types.POSTS_FETCHED, posts}
}

function errorLoadingPosts(error) {
  return { type: types.POSTS_FETCH_ERROR, error}
}

export function onSubmitPost(post) {
  return function(dispatch) {
    setTimeout(function() {
      dispatch(postSaved(post));
    }, 500);
  }
}

function postSaved(post) {
  return { type: types.POST_SAVED, post }
}
