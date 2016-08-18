import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BlogiActions from '../actions';


class NewPost extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.titleChanged = this.titleChanged.bind(this);
    this.bodyChanged = this.bodyChanged.bind(this);
    this.state = {
      title: '',
      body: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.actions.onSubmitPost({ title: this.state.title, body: this.state.body });
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
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text" id="title" name="title"
            onChange={this.titleChanged} value={this.state.title}
          />
          <br />
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

NewPost.propTypes = {
  posts: PropTypes.array,
  actions: PropTypes.object.isRequired,
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
)(NewPost);
