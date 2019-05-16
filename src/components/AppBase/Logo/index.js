import React, {Component} from 'react'
import './styles.less'
import LogoImg from '@/assets/logo.jpg'
class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <a href="javascript:;">
          <img src={LogoImg} alt="" />
          <h2>antd-mobx</h2>
        </a>
      </div>
    );
  }
}

export default Logo
