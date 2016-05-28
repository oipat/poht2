import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect, Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import Nav from '../components/Nav'
import MainSection from '../components/MainSection'
import * as BlogiActions from '../actions'


class App extends Component {
  render() {
    const { posts, actions } = this.props
    return (
      <div>
        <Nav />
        // { children }
      </div>
    )
  }
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(BlogiActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
