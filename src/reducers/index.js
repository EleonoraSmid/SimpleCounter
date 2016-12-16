import {  add, remove, counter } from '../actions/index.js'

const initialState = {
  counter: counter.check
}

const counterApp = (state = initialState, action) => {
  switch (action.type) {
    case add:
        return Object.assign({}, state, {
          counter: state.counter + 1
      })
      return state
    case remove:
        return Object.assign({}, state, {
          counter: counter.check
      })
    default:
      return state
    }
}
export default counterApp
