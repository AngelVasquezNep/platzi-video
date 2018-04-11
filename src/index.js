import React from 'react'
import {render} from 'react-dom'
import App from './App'
import data from '@/api.json'

import registerServiceWorker from './registerServiceWorker'


render(<App data={ data }/>, document.getElementById('root'))
registerServiceWorker()
