var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../dispatcher/BlogiDispatcher');
var BlogiConstants = require('../constants/BlogiConstants');


var _posts = [];
var _submitState = "no";
var _value = "z";

function loadPosts(data) {
  _posts = data;
}

function addPost(newPost) {
  _posts.push(newPost);
}

function removeAllPosts() {
  _posts = [];
}

function setSubmitState(value) {
  _submitState = value;
}

var BlogiStore = assign({}, EventEmitter.prototype, {

  getPosts: function() {
    return _posts;
  },

  getSubmitState: function() {
    return _submitState;
  },

  getValue: function() {
    return _value;
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
      setSubmitState("pending");
      break;

    case BlogiConstants.BLOG_POST_SAVED:
      if(action.data.errors) {
        setSubmitState("err");
      }
      else {
        addPost(action.data);
        setSubmitState("ok");
      }
      break;

    default:
      return true;
  }

  BlogiStore.emitChange();
  return true;
});

module.exports = BlogiStore;
