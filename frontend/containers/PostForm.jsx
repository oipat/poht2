import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BlogiActions from '../actions';


class PostForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.titleChanged = this.titleChanged.bind(this);
    this.bodyChanged = this.bodyChanged.bind(this);
    this.state = {
      title: '',
      body: '',
    };
    this.componentWillReceiveProps(props);
  }

  componentWillReceiveProps(props) {
    if (props.routeParams.id) {
      const thePost = props.posts.find(post => post.id === props.routeParams.id);
      this.state = thePost || this.state;
    } else {
      this.state = {
        title: '',
        body: '',
      };
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.id) {
      this.props.actions.onUpdatePost(
        { id: this.state.id, title: this.state.title, body: this.state.body }
      );
    } else {
      this.props.actions.onSubmitPost(
        { title: this.state.title, body: this.state.body }
      );
    }
  }

  titleChanged(e) {
    this.setState({ title: e.target.value });
  }

  bodyChanged(e) {
    this.setState({ body: e.target.value });
  }

  render() {
    return (
      <section className="main">
        <h1>{this.props.routeParams.id ? 'Edit Blog Post' : 'Post New Blog Post'}</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text" id="title" name="title"
            onChange={this.titleChanged} value={this.state.title}
          />
          <br />
          <label htmlFor="body">Content:</label>
          <textarea
            name="body" onChange={this.bodyChanged} value={this.state.body}
          />
          <br />
          <button name="submit">submit</button>
        </form>
      </section>
    );
  }
}

PostForm.propTypes = {
  posts: PropTypes.array,
  actions: PropTypes.object.isRequired,
  routeParams: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    posts: state.posts,
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
)(PostForm);
