var alt = require('../alt');

var BlogiApi = require('../util/BlogiApi');


class BlogiActions {
  constructor() {
    this.generateActions(
      'loadPostsComplete'
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

}

module.exports = alt.createActions(BlogiActions);
