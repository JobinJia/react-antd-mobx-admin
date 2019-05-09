import React, {Component} from 'react'
import {observer, inject} from 'mobx-react/index'
import {Route, withRouter} from 'react-router-dom'

import asyncLoad from '@utils/AsyncLoad'

const Login = asyncLoad(() => import('@views/Login'))
const Main = asyncLoad(() => import('@views/Main'))

@withRouter
@inject('appStore')
@observer
class App extends Component {
  render() {
    const {token} = this.props.appStore
    return (
      <Route component={!token ? Login : Main}/>
    )
  }
}

export default App
