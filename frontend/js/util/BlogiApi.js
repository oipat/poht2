'use strict';

var request = require('then-request');
var BlogiActions = require('../actions/BlogiActions');

var BlogiApi = {

  getBlogPosts: function(numPosts, cb) {
    // request('GET','http://localhost:8080/blogi/posts')
    //   .done(function(res) {
    //     try {
    //       var json = JSON.parse(res.getBody());
    //     } catch(err) {
    //       console.log(err);
    //     }
    //     // Lag simulator MK II
    //     setTimeout(function() {
    //       cb(json);
    //     }, 500)
    //   });

    // for testing purposes
    setTimeout(function() {
      cb([{asd: "asd1"}, {asd: "asd2"}, {asd: "asd3"}]);
    }, 500);
  }
};

module.exports = BlogiApi;
