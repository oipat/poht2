import React, { PropTypes } from 'react';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

function BlogPost({ post }) {
  return (
    <div>
      <h1>
        {post.title}
      </h1>
      <p dangerouslySetInnerHTML={{ __html: md.render(post.body) }} />
    </div>
  );
}


BlogPost.propTypes = {
  post: PropTypes.object.isRequired,
};

export default BlogPost;
