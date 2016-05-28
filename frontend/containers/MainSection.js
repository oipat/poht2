import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import BlogPost from '../components/BlogPost'
import * as BlogiActions from '../actions'


class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    console.log("MainSection.render")
    const { posts, actions } = this.props
    return (
      <section className="main">
        <ul>
          {posts.map(post =>
            <BlogPost key={post.id} post={post} {...actions} />
          )}
        </ul>
      </section>
    )
  }
}

MainSection.propTypes = {
  posts: PropTypes.array,
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(BlogiActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSection)
