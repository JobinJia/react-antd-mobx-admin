import React, {Component} from 'react'
import {Icon, Spin} from 'antd'
import './style.less'

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <Spin
          size="large"
          indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />}
          tip="加载中..."
        />
      </div>
    )
  }
}

export default Loading
