/* global document */

import 'whatwg-fetch'
import React from 'react'
import { render } from 'react-dom'
import FeatureTogglesPage from './containers/FeatureTogglesPage'

render(
  <FeatureTogglesPage />,
  document.getElementById('app')
)
