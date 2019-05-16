import React, {Component} from "react";
import {Icon, Layout} from "antd";
import './style.less'
import {inject, observer} from "mobx-react";

const {Header} = Layout

@inject('mainStore')
@observer
class AppHeader extends Component {

  toggle = () => {
    this.props.mainStore.toggle()
  }

  render() {
    const {collapsed} = this.props.mainStore

    return (
      <Header style={{background: '#ffffff', padding: 0}}>
        <Icon
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
      </Header>
    )
  }
}

export default AppHeader
