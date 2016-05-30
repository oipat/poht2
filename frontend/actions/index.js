import * as types from '../constants/ActionTypes'

export function getPosts(numPosts, cb) {
  setTimeout(function() {
    cb([
      {
        id: 1,
        title: 'BlogPostTitle1',
        body: 'BlogPostBody1',
        author: 'Author1'
      },
      {
        id: 2,
        title: 'BlogPostTitle2',
        author: 'Author2',
        body: 'BlogPostBody2'
      },
      {
        id: 3,
        title: 'BlogPostTitle3',
        author: 'Author1',
        body: 'BlogPostBody3'
      }
    ])
}, 1200)
}

export function onSubmitPost(post) {
  setTimeout(function() {
    postSaved()
  }, 1100)
  return { type: types.POST_SUBMITTED, post: post }
}

function postSaved() {
  console.log('postSaved')
  return { type: types.POST_SAVED }
}
