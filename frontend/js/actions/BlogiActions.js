var alt = require('../alt');

var BlogiApi = require('../util/BlogiApi');


class BlogiActions {
  constructor() {
    this.generateActions(
      'loadPostsComplete',
      'submitBlogPostComplete'
    );
  }

  loadClicked() {
    console.log("actions.loadclicked");
    this.dispatch();
    this.actions.loadPosts();
  }

  loadPosts() {
    console.log("actions.loadPosts")
    this.dispatch({});
    BlogiApi.getBlogPosts(5,
      (posts) => { this.actions.loadPostsComplete(posts) }
    );
  }

  submitBlogPost(newBlogPost) {
    this.dispatch({});
    BlogiApi.submitBlogPost(newBlogPost,
      (savedBlogPost) => { this.actions.submitBlogPostComplete(savedBlogPost) }
    );
  }


}

module.exports = alt.createActions(BlogiActions);
