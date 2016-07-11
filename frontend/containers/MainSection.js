import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import BlogPost from '../components/BlogPost'
import BlogPostList from '../components/BlogPostList'
import ErrorNotification from '../components/ErrorNotification'
import * as BlogiActions from '../actions'


class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
  }

  load() {
    this.props.actions.getPosts()
  }

  render() {
    const { posts, general, actions } = this.props
    var mainComponent;
    if(this.props.routeParams.id) {
      var requestedPost = posts.find(
        post => post.id == this.props.routeParams.id
      )
      if(requestedPost === undefined) {
        mainComponent = <ErrorNotification message="Post not found" />
      } else {
        mainComponent = <BlogPost post={requestedPost} actions={actions} />
      }
    }
    else {
      mainComponent = <BlogPostList posts={posts} actions={actions} />
    }
    return (
      <section className="main">
        {mainComponent}
        {this.props.general.fetching ? 'asd' : 'zxc'}
        <button onClick={this.load.bind(this)}>Load Posts</button>
      </section>
    )
  }
}

MainSection.propTypes = {
  posts: PropTypes.array,
  general: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    general: state.general,
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
