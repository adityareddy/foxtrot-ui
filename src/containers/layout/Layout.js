import React from 'react'
import { connect } from 'dva'

const Layout = (props) => {
  const onClickLogOut = (e) => {
    e.preventDefault()
    props.dispatch({
      type: `auth/logOut`
    })
  }
  return (<div>{props.children}</div>
  )
}

function mapStateToProps (state) {
  return {
    auth: state.auth
  }
}

export default connect(
  mapStateToProps,
)(Layout)
