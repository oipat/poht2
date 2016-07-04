import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect, Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import Nav from '../components/Nav'
import MainSection from '../containers/MainSection'
import * as BlogiActions from '../actions'


class App extends Component {
  render() {
    const { actions } = this.props
    return (
      <div className="wrapper">
        <h1 className="title">Tittel</h1>
        <Nav />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
}

export default App
