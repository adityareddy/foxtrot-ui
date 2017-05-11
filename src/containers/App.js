import React, { Component } from 'react'
import { connect } from 'dva'

import './App.scss'

export class App extends Component {

  render () {
    return (
      <div className='app-container'>{this.props.children}</div>
    )
  }
}

function mapStateToProps (state) {
  return {
    auth: state.auth
  }
}

export default connect(
  mapStateToProps,
)(App)
