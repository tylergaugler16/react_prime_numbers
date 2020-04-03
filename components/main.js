import React from "react"
import { fromJS } from "immutable"
import PropTypes from "prop-types"
import ImmutablePropTypes from "react-immutable-proptypes"
import classNames from "classnames"

class Main extends React.PureComponent {
  static propTypes = {}

  static defaultProps = {}

  componentDidMount() {
    this.props.sayHello()
  }


  render() {
    return (
      <div className={ classNames(
        "main-component",
      ) }>
        MAIN SCREEN
      </div>
    )
  }
}

export default Main
