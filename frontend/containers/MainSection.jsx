import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BlogPost from '../components/BlogPost';
import BlogPostList from '../components/BlogPostList';
import ErrorNotification from '../components/ErrorNotification';
import * as BlogiActions from '../actions';


class MainSection extends Component {

  constructor() {
    super();
    this.load = this.load.bind(this);
  }

  load() {
    this.props.actions.getPosts();
  }

  render() {
    const { posts, general, actions } = this.props;
    let mainComponent;
    if (this.props.routeParams.id) {
      const requestedPost = posts.find(
        post => post.id === this.props.routeParams.id
      );
      mainComponent = requestedPost === undefined ?
        <ErrorNotification message="Post not found" /> :
        <BlogPost post={requestedPost} actions={actions} userRole="asd" />;
    } else {
      mainComponent = <BlogPostList posts={posts} userRole="admin" actions={actions} />;
    }
    return (
      <section className="main">
        {mainComponent}
        {general.fetching ? 'asd' : 'zxc'}
        <button onClick={this.load}>Load Posts</button>
      </section>
    );
  }
}

MainSection.propTypes = {
  posts: PropTypes.array,
  general: PropTypes.object.isRequired,
  routeParams: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    posts: state.posts,
    general: state.general,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(BlogiActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSection);
