var alt = require('../alt');

var BlogiActions = require('../actions/BlogiActions')


class BlogiStore {
  constructor() {
    this.bindActions(BlogiActions);
    this.posts = [];
    this.submitState = "no";
    this.on('init', () => {
      console.debug('BlogiStore.init');
      BlogiActions.loadPosts();
    });
  }

  loadClicked() {
    console.log("store.loadclicked");
    this.posts = [];
  }

  loadPostsComplete(newPosts) {
    console.log("store.loadPostsComplete");
    this.posts = newPosts;
  }

  submitBlogPost(newBlogPost) {
    console.log('store.submitBlogPost');
    this.submitState = "yes";
  }

  submitBlogPostComplete(savedBlogPost) {
    console.log('store.submitBlogPostComplete');
    console.log(savedBlogPost);
    this.posts.push(savedBlogPost);
    console.log(this.posts);
    this.submitState = "ok";
  }

}

module.exports = alt.createStore(BlogiStore);
