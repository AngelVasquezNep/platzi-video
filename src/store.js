import {createStore} from 'redux'

const initialState = [
  { 'title': 'Despacito' },
  { 'title': 'Hola' },
  { 'title': 'Mundo' },
] 

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_SONG':
      return [...state, {title: action.payload.title}]
    default:
      return state
  }
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;