import {observable, action} from "mobx";
import {getToken, setToken} from "../../utils/util";

class AppStore {
  @observable token

  constructor () {
    this.token = getToken()
  }

  @action.bound
  handleLogin = values => {
    // to do request login
    console.table(values)
    setTimeout(() => {
      let token = Math.random().toString(36).substring(2)
      setToken(token)
      this.token = token
    }, 0)
  }
}

const appStore = new AppStore()

export default appStore
