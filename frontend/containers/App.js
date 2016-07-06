import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect, Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import Nav from '../components/Nav'
import HamburgerMenu from '../components/HamburgerMenu'
import MainSection from '../containers/MainSection'
import * as BlogiActions from '../actions'


class App extends Component {
  render() {
    const { actions } = this.props
    return (
      <div className="wrapper">
        <div className="header">
          <h1 className="title">Tittel</h1>
          <HamburgerMenu />
        </div>
        <div className="container">
          <div className="content">
            <Nav />
            {this.props.children}
          </div>
        </div>
        <div className="footer">
          fottter
        </div>
      </div>
    )
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(BlogiActions, dispatch)
  }
}

export default App
