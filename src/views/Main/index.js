import React, {Component} from 'react'
import {Layout} from "antd";
import './styles.less'
import Logo from '@com/AppBase/Logo'
const {Header, Footer, Sider, Content} = Layout


class Main extends Component {
  render() {
    return (
      <Layout className="app">
        <Sider>
          <Logo/>
        </Sider>
        <Layout>
          <Header style={{background: '#fff'}}>headerheaderheaderheader</Header>
          <Content></Content>
          <Footer>CopyRight @{new Date().getFullYear()}</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default Main
