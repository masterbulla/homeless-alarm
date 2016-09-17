/* global document */

import 'whatwg-fetch'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'

render(
  <App />,
  document.getElementById('app')
)
