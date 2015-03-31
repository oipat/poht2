var BlogiDispatcher = require('../dispatcher/BlogiDispatcher');
var BlogiConstants = require('../constants/BlogiConstants');
var BlogiApi = require('../util/BlogiApi');

var BlogiActions = {

  loadPosts: function(data) {
    BlogiDispatcher.handleAction({
      actionType: BlogiConstants.LOAD_POSTS,
      data: data
    });
  },

  loadClicked: function() {
    BlogiApi.getBlogPosts(5, this.loadPosts);
    BlogiDispatcher.handleAction({
      actionType: BlogiConstants.LOAD_CLICKED
    });
  },

  blogPostSubmitted: function(blogPost) {
    BlogiApi.submitBlogPost(blogPost, this.blogPostSaveCb);
    BlogiDispatcher.handleAction({
      actionType: BlogiConstants.BLOG_POST_SUBMITTED
    });
  },

  blogPostSaveCb: function(data) {
   BlogiDispatcher.handleAction({
     actionType: BlogiConstants.BLOG_POST_SAVED,
     data: data
   });
  }

};

module.exports = BlogiActions;
