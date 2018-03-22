import React from 'react'
import {render} from 'react-dom'
import './index.css'
import PlayList from '@/components/playList'
// import App from './App'
import data from './api.json'

import registerServiceWorker from './registerServiceWorker'

// render(<App />, document.getElementById('root'))
render(<PlayList data={data}/>, document.getElementById('root'))
registerServiceWorker()
