import React, {Component} from 'react'
import './style.less'
import {Icon, Menu} from "antd";

const MenuItem = Menu.Item

class AppLeft extends Component {
  render() {
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <MenuItem key="1">
          <Icon type="user" />
          <span className="nav-text">nav 1</span>
        </MenuItem>
        <MenuItem key="2">
          <Icon type="video-camera" />
          <span className="nav-text">nav 2</span>
        </MenuItem>
        <MenuItem key="3">
          <Icon type="upload" />
          <span className="nav-text">nav 3</span>
        </MenuItem>
        <MenuItem key="4">
          <Icon type="bar-chart" />
          <span className="nav-text">nav 4</span>
        </MenuItem>
        <MenuItem key="5">
          <Icon type="cloud-o" />
          <span className="nav-text">nav 5</span>
        </MenuItem>
        <MenuItem key="6">
          <Icon type="appstore-o" />
          <span className="nav-text">nav 6</span>
        </MenuItem>
        <MenuItem key="7">
          <Icon type="team" />
          <span className="nav-text">nav 7</span>
        </MenuItem>
        <MenuItem key="8">
          <Icon type="shop" />
          <span className="nav-text">nav 8</span>
        </MenuItem>
      </Menu>
    );
  }
}

export default AppLeft
