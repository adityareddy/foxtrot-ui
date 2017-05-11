import React, { Component } from 'react'
import { connect } from 'dva'

export class Login extends Component {

  constructor (props) {
    super(props)
    this.loginEmail = (fieldValues) => {
      this.props.dispatch({
        type: `auth/logInEmail`,
        payload: {
          email: fieldValues.email,
          password: fieldValues.password
        }
      })
    }
    this.loginGoogle = () => {
      this.props.dispatch({
        type: `auth/logInGoogle`,
        payload: {}
      })
    }
  }
 
  componentDidMount () {
    if (process.env.NODE_ENV === 'web-dev') {
    }
  }

  render () {
    return (
      <div><button onClick={this.loginEmail({email:'test@test.com', password:'tester'})}>login</button></div>
      
    )
  }
}

function itemSelector (state, ownProps) {
  return {}
}

export default connect(itemSelector)(Login)
