import React, {Component} from 'react'
import './style.less'
import LogoImg from '@/assets/logo.jpg'
import {inject, observer} from "mobx-react";

@inject('mainStore')
@observer
class Logo extends Component {
  render() {
    const {collapsed} = this.props.mainStore

    return (
      <div className="logo">
        <a href="javascript:;">
          <img src={LogoImg} alt="" />
          {
            !collapsed ? <h2>ant-mobx-admin</h2> : null
          }
        </a>
      </div>
    );
  }
}

export default Logo
