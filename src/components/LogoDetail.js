import React, { PropTypes, Component } from 'react'
import { Button, Tabs, Layout, Card } from 'element-react'
import { firebase } from 'react-redux-firebase'

class LogoDetail extends Component {
  static propTypes = {
    todo: PropTypes.object,
    id: PropTypes.string
  }

  render(){
    const {firebase, logo, id} = this.props
    const deleteLogo = (event) => {
       firebase.remove(`/logos/${id}`)
    }
    return (
        <div>
            <Card bodyStyle={{ padding: 0 }}>
                <svg id="SvgjsSvg1152" width="360" height="275" >
                    <rect id="SvgjsRect1157" width="360" height="275" x="0" y="0" fill="#076473">
                    </rect>
                    <text textAnchor="middle" x="150" y="55">Circle Text</text>
                </svg>
            </Card>
          <Layout.Row type="flex" className="row-bg" justify="space-around">
            <Layout.Col span="6"><Button type="primary">Like!</Button></Layout.Col>
            <Layout.Col span="6"><Button>Dislike!</Button></Layout.Col>
            <Layout.Col span="6"><Button onClick={deleteLogo}>Delete!</Button></Layout.Col>
          </Layout.Row>
        </div>
    )
  }
}
export default firebase()(LogoDetail)