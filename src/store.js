import { createStore } from 'redux'
import counterApp from './reducers/index.js'
import { ADD_NUMBER, REMOVE_NUMBER, counter } from './actions/index.js'

let store = createStore(counterApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


console.log(store.getState())

let unsubscribe = store.subscribe(() =>
console.log(store.getState())
)

let b = 0;
for(let i = 0; i < 101; i++){
  b++
  if(b === 20){
    store.dispatch(REMOVE_NUMBER())
    b = 0
  }
  store.dispatch(ADD_NUMBER())
}
