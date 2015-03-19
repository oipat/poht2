var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../dispatcher/BlogiDispatcher');
var BlogiConstants = require('../constants/BlogiConstants');


var _posts = [];
var _isSubmitPending = false;

function loadPosts(data) {
  _posts = data;
}

function addPost(newPost) {
  _posts.push(newPost);
}

function removeAllPosts() {
  _posts = [];
}

function setSubmitPending(value) {
  _isSubmitPending = value;
}

var BlogiStore = assign({}, EventEmitter.prototype, {

  getPosts: function() {
    return _posts;
  },

  isSubmitPending: function() {
    return _isSubmitPending;
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case BlogiConstants.LOAD_POSTS:
      loadPosts(action.data);
      break;

    case BlogiConstants.LOAD_CLICKED:
      removeAllPosts();
      break;

    case BlogiConstants.BLOG_POST_SUBMITTED:
      setSubmitPending(true);
      break;

    case BlogiConstants.BLOG_POST_SAVED:
      setSubmitPending(false);
      addPost(action.data);
      break;

    default:
      return true;
  }

  BlogiStore.emitChange();
  return true;
});

module.exports = BlogiStore;
