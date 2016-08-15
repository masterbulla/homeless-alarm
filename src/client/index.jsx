import React from 'react'
import { render } from 'react-dom'
import App from './App.jsx'
import toggles from '../../toggles.json'

render(
  <App toggles={toggles} />,
  document.getElementById('app')
)
