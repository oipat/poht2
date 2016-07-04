import * as types from '../constants/ActionTypes'

export function getPosts() {
  return function(dispatch) {
    dispatch({ type: types.POSTS_FETCHING })
    return fetchPosts().then(
      response => response.json().then(
        posts =>
        {
          setTimeout(function () {
            dispatch(postsFetched(posts))
          }, 800)
        }
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
    var request = new Request('http://localhost:5000/blogi/posts', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(post),
    	headers: new Headers({
    		'Content-Type': 'application/json'
    	})
    })
    fetch(request).then(
      response => response.json().then(
        post => dispatch(postSaved(post))
      )
    )
  }
}

function postSaved(post) {
  return { type: types.POST_SAVED, post }
}
