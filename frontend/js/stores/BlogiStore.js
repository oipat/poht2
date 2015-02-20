var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../dispatcher/BlogiDispatcher');
var BlogiConstants = require('../constants/BlogiConstants');


var _posts = [];

function loadPosts(data) {
  _posts = data;
}

var BlogiStore = assign({}, EventEmitter.prototype, {

  getPosts: function() {
    return _posts;
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

    case BlogiConstants.TEST:
      loadPosts({posts: _posts + "a"});
      break;

    default:
      return true;
  }

  BlogiStore.emitChange();
  return true;
});

module.exports = BlogiStore;
