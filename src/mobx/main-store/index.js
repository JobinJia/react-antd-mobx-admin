import {observable, action} from "mobx";

class MainStore {
  @observable collapsed = false


  @action
  toggle = () => {
    this.collapsed = !this.collapsed
  }

}

const mainStore = new MainStore()

export default mainStore
