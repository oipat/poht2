import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class BlogPost extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
  const { post, actions } = this.props

    return (
      <div>
        <h1>
          {post.title}
        </h1>
        <p>
          {post.body}
        </p>
      </div>
    )
  }
}

BlogPost.propTypes = {
  post: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default BlogPost
