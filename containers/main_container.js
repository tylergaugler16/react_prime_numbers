import { connect } from "react-redux"
import Main from "../components/main"
import { hello } from "../redux/actions/prime_numbers_actions"

const mapStateToProps = (state) => {
  return {
    name: state.getIn(["primeNumbers", "name"]),
  }
}

const mapDispatchToProps = (dispatch) => ({
  sayHello: () => {
    dispatch(hello())
  },
})

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main)

export default MainContainer
