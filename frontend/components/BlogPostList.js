import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import BlogPost from '../components/BlogPost'

class BlogPostList extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { posts, actions } = this.props
    return (
      <ul>
        {posts.map(post =>
          <li key={post.id}>
            <Link to={"/viewpost/" + post.id}>
              {post.title}
            </Link>
          </li>
        )}
      </ul>
    )
  }
}

BlogPostList.propTypes = {
  posts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default BlogPostList
