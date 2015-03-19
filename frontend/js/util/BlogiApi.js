var request = require('then-request');

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
      cb([
        {
          title: "BlogPostTitle1",
          body: "BlogPostBody1",
          author: "Author1"
        },
        {
          title: "BlogPostTitle2",
          author: "Author2",
          body: "BlogPostBody2"
        }, 
        {
          title: "BlogPostTitle3",
          author: "Author1",
          body: "BlogPostBody3"
        }
      ]);
    }, 200);
  },

  submitBlogPost: function(blogPost, cb) {
    setTimeout(function() {
      cb(blogPost);
    }, 200);
  }

};

module.exports = BlogiApi;
