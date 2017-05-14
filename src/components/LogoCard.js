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
            <svg viewBox="0 0 400 400">
              <rect width="100%" height="100%" fill={logoDetails.background_color} />
              <g transform="translate(150 150)">
                <path transform="scale(2) translate(-35 -15)" fill="white" stroke="none" d={logoDetails.monogram}/>
                <path fill="white" stroke="none" d={logoDetails.brand_path}/>
                <path transform="scale(0.45) translate(0 115)" fill="white" stroke="none" d={logoDetails.slogan_path}/>
              </g>
            </svg>
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