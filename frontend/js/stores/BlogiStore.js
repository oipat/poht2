var alt = require('../alt');

var blogiActions = require('../actions/BlogiActions')


class BlogiStore {
  constructor() {
    this.bindActions(blogiActions);
    this.posts = [];
  }

  /*addPost(newPost) {
    posts.push(newPost);
  }

  removeAllPosts() {
    posts = [];
  }

  setSubmitState(value) {
    submitState = value;
  }*/

  loadClicked() {
    console.log("store.loadclicked");
    this.posts = [];
  }

  loadPostsComplete(newPosts) {
    console.log("store.loadPostsComplete");
    this.posts = newPosts;
  }

};

module.exports = alt.createStore(BlogiStore);
