import React, { PropTypes } from 'react';
import BlogPostControls from './BlogPostControls';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

function BlogPost({ post, userRole, actions }) {
  return (
    <div>
      <h1>
        {post.title}
      </h1>
      <BlogPostControls postId={post.id} userRole={userRole} actions={actions} />
      <p dangerouslySetInnerHTML={{ __html: md.render(post.body) }} />
    </div>
  );
}


BlogPost.propTypes = {
  post: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  userRole: PropTypes.string.isRequired,
};

export default BlogPost;
