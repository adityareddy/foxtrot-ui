import React, { PropTypes, Component } from 'react'
import { Button, Tabs, Layout, Card, Loading } from 'element-react'
import { firebase } from 'react-redux-firebase'

class LogoCard extends Component {
  static propTypes = {
    logoDetails: PropTypes.object,
    id: PropTypes.string
  }

  render(){
    const {firebase, logoDetails, id} = this.props
    const deleteLogo = (event) => {
       firebase.remove(`/logos/${id}`)
    }
    return (
        <div>
        <Loading loading={false}>
            <div style={{ margin: "20px", boxShadow: "0 10px 10px rgba(0,0,0,0.2), 0 100px 100px rgba(0, 0, 0, 0.03)" }}>

            </div>
          <Layout.Row type="flex" className="row-bg" justify="space-around">
            <Layout.Col span="6"><Button type="primary">Like!</Button></Layout.Col>
            <Layout.Col span="6"><Button>Dislike!</Button></Layout.Col>
            <Layout.Col span="6"><Button onClick={deleteLogo}>Delete!</Button></Layout.Col>
          </Layout.Row>
          </Loading>
        </div>
    )
  }
}
export default firebase()(LogoCard)