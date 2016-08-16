import React from 'react'
import { render } from 'react-dom'
import App from './App.jsx'
import toggles from '../config/toggles.dev.json'

render(
  <App toggles={toggles} />,
  document.getElementById('app')
)
