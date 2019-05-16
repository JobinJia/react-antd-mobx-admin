import React, {Component} from 'react'
import {Layout} from "antd";
import './styles.less'
import Logo from '@com/AppBase/Logo'
import Menu from '@com/AppBase/AppLeft'
import Header from '@com/AppBase/AppHeader'
import Footer from '@com/AppBase/AppFooter'
import {inject, observer} from "mobx-react";
const {Sider, Content} = Layout


@inject('mainStore')
@observer
class Main extends Component {

  render() {
    const {collapsed} = this.props.mainStore

    return (
      <Layout className="app">
        <Sider width={256} trigger={null} collapsible collapsed={collapsed} >
          <Logo/>
          <Menu/>
        </Sider>
        <Layout>
          <Header/>
          <Content></Content>
          <Footer/>
        </Layout>
      </Layout>
    )
  }
}

export default Main
