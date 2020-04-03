import ActionTypes from "../action_types"
import { fromJS } from "immutable"


const initialState = fromJS({
  name: "Bonobos",
  primes: []
})
function primeNumbersReducer(state = initialState, action) {
  switch (action.type) {
    case "hello":
      console.log(`Hello ${state.get("name")}!`)
      return state
    default:
      return state
  }
}

export default primeNumbersReducer
