import dva, { connect } from 'dva'
import {router} from './router'
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase'
import { firebase as fbConfig } from './config'

import auth from './models/auth'
import layout from './models/layout'
import logo from './models/logo'

import 'element-theme-default'

const app = dva({
  extraReducers: {
    form: firebaseStateReducer,
  },
  extraEnhancers: [reactReduxFirebase(fbConfig, { userProfile: 'users' })],
})

app.model(auth)
app.model(layout)
app.model(logo)

app.router(router)

app.start('#root')