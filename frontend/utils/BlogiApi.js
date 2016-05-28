import request from 'then-request'


function getBlogPosts(numPosts, cb) {
  console.log("BlogiApi.getBlogPosts")
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
}


export function getBlogPosts
