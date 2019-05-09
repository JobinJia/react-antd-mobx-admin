import Loading from '@com/AppBase/Loading'
import React, {Component} from 'react'

const asyncLoad = importCom => {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        component: null
      }
    }

    componentDidMount() {
      importCom().then(cmp => {
        this.setState({component: cmp.default})
      })
    }

    render () {
      const Com = this.state.component
      return Com ? <Com {...this.props} /> : <Loading />
    }
  }
}

export default asyncLoad
