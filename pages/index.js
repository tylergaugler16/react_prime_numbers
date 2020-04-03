import React from "react"
import { Provider } from "react-redux"

import store from "../redux/store"
import MainContainer from "../containers/main_container"

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <MainContainer />
      </Provider>
    )
  }
}
