import ActionTypes from "../action_types"
import { fromJS } from "immutable"

export const hello = () => {
  return { type: 'hello' }
}
