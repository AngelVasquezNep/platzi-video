import React from 'react'
import {render} from 'react-dom'
import App from './App'
import data from '@/api.json'
import registerServiceWorker from './registerServiceWorker'

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducers/data'

const initialState = {
  data: {...data}
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
)

render(
  <Provider store = {store}>
    <App/>
  </Provider>
, document.getElementById('root'))

registerServiceWorker()
