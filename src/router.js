import React from 'react'
import { Router, IndexRoute, Route } from 'dva/router'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import { routerActions } from 'react-router-redux'

import Login from './containers/auth/Login'
import Home from './containers/Home'
import App from './containers/App'
import Layout from './containers/layout/Layout'
import { connect } from 'dva'

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth.currentUser,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated'
})

const UserIsNotAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth.currentUser,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsNotAuthenticated',
  predicate: user => user === null,
  failureRedirectPath: (state, ownProps) => ownProps.location.query.redirect || '/',
  allowRedirectBack: false
})

export const routes = (
  <Route path='/' component={App}>
    <Route path='login' component={UserIsNotAuthenticated(Login)} />
    <Route component={UserIsAuthenticated(Layout)} onEnter={connect(UserIsAuthenticated.onEnter)}>
      <IndexRoute component={Home} />
    </Route>
  </Route>)

export const router = ({history}) => (
  <Router history={history}>
    {routes}
  </Router>
)
