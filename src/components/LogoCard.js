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
        <Loading loading={!logoDetails.isReady}>
            <div style={{ margin: "20px", boxShadow: "0 10px 10px rgba(0,0,0,0.2), 0 100px 100px rgba(0, 0, 0, 0.03)" }}>
                <svg id="SvgjsSvg1152" width="360" height="275" >
                    <rect id="SvgjsRect1157" width="360" height="275" x="0" y="0" fill="#076473">
                    </rect>
                    <circle cx="50" cy="55" r="45" fill="none" stroke="#F0CE01" strokeWidth="4" />
                    <text textAnchor="middle" x="150" y="55">{logoDetails.brandName}</text>
                      <path d={logoDetails.brandNamePath}
                        x="150" y="180"
                        stroke="none"
                        strokeWidth={0}
                        fill="orange"
                      />
                    <text textAnchor="middle" x="150" y="75">{logoDetails.slogan}</text>
                </svg>
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