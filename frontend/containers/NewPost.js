import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import BlogPost from '../components/BlogPost'
import * as BlogiActions from '../actions'


class NewPost extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    console.log("NewPost.render")
    const { posts, actions } = this.props
    return (
      <section className="main">asd
      </section>
    )
  }
}

NewPost.propTypes = {
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
)(NewPost)
