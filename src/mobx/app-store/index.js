import {observable} from "mobx";

class AppStore {
  @observable token

  constructor () {
    this.token = null
  }
}

const appStore = new AppStore()
export default appStore
