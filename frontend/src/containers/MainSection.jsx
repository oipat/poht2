import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import fp from 'lodash/fp';
import BlogPost from '../components/BlogPost';
import BlogPostList from '../components/BlogPostList';
import ErrorNotification from '../components/ErrorNotification';
import * as BlogiActions from '../actions';


class MainSection extends Component {

  render() {
    const { actions, posts } = this.props;
    const postsArr = fp.flow(
      fp.sortBy('created'),
      fp.reverse,
    )(posts);
    // const postsArr = _chain(posts).sortBy('created').reverse().value();
    let mainComponent;
    if (this.props.routeParams.id) {
      const requestedPost = posts[this.props.routeParams.id];
      mainComponent = requestedPost === undefined ?
        <ErrorNotification message="Post not found" /> :
        <BlogPost post={requestedPost} actions={actions} userRole="asd" />;
    } else {
      mainComponent = <BlogPostList posts={postsArr} userRole="admin" actions={actions} />;
    }
    return (
      <section className="main">
        {mainComponent}
      </section>
    );
  }
}

MainSection.propTypes = {
  posts: PropTypes.object,
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
