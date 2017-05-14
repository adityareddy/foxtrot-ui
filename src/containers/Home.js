import React, { Component } from 'react'
import { Link } from 'react-router'
import LogoCard from '../components/LogoCard'
import { Button, Tabs, Layout, Card, Input } from 'element-react'
import { connect } from 'dva'

export class Home extends Component {
    
  constructor (props) {
    super(props)
    this.generateLogo = () => {
      this.props.dispatch({
        type: `logo/generateLogo`,
        payload: {
          brandName: this.refs.brandName.refs.input.value,
          slogan: this.refs.slogan.refs.input.value
        }
      })
    }
  }
    
  render () {
    return (
      <div className='App'>
        <Tabs activeName="1">
          <Tabs.Pane label="User" name="1">
            <Layout.Row gutter="20" style={{margin:'20px'}}>
            {this.props.logoList.map((logo, i)=>(
              <Layout.Col span={ 8 } key={i}>
                <LogoCard logoDetails={logo}/>
              </Layout.Col>
            ))}
            </Layout.Row>
            <Layout.Row type="flex" justify="space-around" style={{marginTop:"20px"}}>
                <Layout.Col span="2">
                    <Input placeholder="Brand Name" ref='brandName'/>
                    <Input placeholder="Slogan" ref='slogan'/>
                    <Button type="primary" size="large" onClick={this.generateLogo}>Generate!</Button>
                </Layout.Col>
            </Layout.Row>
          </Tabs.Pane>
          <Tabs.Pane label="Config" name="2">Config</Tabs.Pane>
          <Tabs.Pane label="Role" name="3">Role</Tabs.Pane>
          <Tabs.Pane label="Task" name="4">Task</Tabs.Pane>
        </Tabs>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    logoList: state.logo.list
  }
}

export default connect(
  mapStateToProps
)(Home)
