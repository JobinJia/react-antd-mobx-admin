import React, {Component} from 'react'
import './style.less'
import {Layout} from "antd";

const {Footer} = Layout

class AppFooter extends Component {
  render() {
    return (
      <Footer>
        <div className="footer">
          Copyright @ {new Date().getFullYear()} - MIT
        </div>
      </Footer>
    );
  }
}

export default AppFooter
