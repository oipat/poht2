jest.dontMock('../../constants/BlogiConstants');
jest.dontMock('../BlogiStore');
jest.dontMock('object-assign');

describe('BlogiStore', function() {

  var BlogiConstants = require('../../constants/BlogiConstants');

  var testBlogPost = {
    title: "BlogPostTitle1",
    body: "BlogPostBody1",
    author: "Author1"
  };
  var blogPostSubmitted = {
    source: 'VIEW_ACTION',
    action: {
      actionType: BlogiConstants.BLOG_POST_SUBMITTED
    }
  };
  var blogPostSaved = {
    source: 'VIEW_ACTION',
    action: {
      actionType: BlogiConstants.BLOG_POST_SAVED,
      data: testBlogPost
    }
  };

  var BlogiDispatcher;
  var BlogiStore;
  var callback;

  beforeEach(function() {
    BlogiDispatcher = require('../../dispatcher/BlogiDispatcher');
    BlogiStore = require('../BlogiStore');
    callback = BlogiDispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', function() {
    expect(BlogiDispatcher.register.mock.calls.length).toBe(1);
  });

  it('initializes with no blog posts', function() {
    var all = BlogiStore.getPosts();
    expect(all).toEqual({});
  });

  it('saves a new post', function() {
    callback(blogPostSubmitted);
    expect(BlogiStore.isSubmitPending()).toEqual(true);
    callback(blogPostSaved);
    expect(BlogiStore.getPosts().length).toBe(1);
    expect(BlogiStore.getPosts()[0]).toEqual(testBlogPost);
  });

});
