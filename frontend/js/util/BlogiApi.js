var request = require('then-request');


var BlogiApi = {

  getBlogPosts: function(numPosts, cb) {
    request('GET','http://localhost:5000/blogi/posts')
      .done(function(res) {
        try {
          var json = JSON.parse(res.getBody());
          cb(json);
        } catch(err) {
          console.log(err);
        }
      });

    //  for testing purposes
    /*setTimeout(function() {
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
    }, 1000);*/
  },

  submitBlogPost: function(blogPost, cb) {
    var options = {
      json: blogPost,
      headers: [
        'Content-Type: application/json'
      ]
    };
    request('POST', 'http://localhost:5000/blogi/posts', options)
      .done(function(res) {
        try {
          cb(JSON.parse(res.getBody()));
        } catch(err) {
          cb(JSON.parse(err.body));
        }
      });

    // setTimeout(function() {
    //   cb(blogPost);
    // }, 200);
  }

};

module.exports = BlogiApi;
