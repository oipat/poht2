import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class BlogPost extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
  const { post, actions } = this.props

    return (
      <li>
      {post.id}, {post.title}
      </li>
    )
  }
}

BlogPost.propTypes = {
  post: PropTypes.object.isRequired
}

export default BlogPost
