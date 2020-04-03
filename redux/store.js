import loggerMiddleware from "redux-logger"
import thunkMiddleware from "redux-thunk"
import { createStore, applyMiddleware } from "redux"
import { combineReducers } from "redux-immutable"

import primeNumbersReducer from "./reducers/prime_number_reducer"

const rootReducer = combineReducers({
  primeNumbers: primeNumbersReducer,
})

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware))
