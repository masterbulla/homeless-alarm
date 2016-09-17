/* global fetch */

import React from 'react'
import OpenWeatherMap from 'react-open-weather-map'
import FeatureTogglesPage from './FeatureTogglesPage'

class App extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = { data: undefined }
  }

  componentDidMount() {
    const q = 'London'
    fetch(`/v1/weather?q=${q}`)
      .then(response => (response.json()))
      .then((json) => {
        this.setState({ data: json })
      })
      .catch((exception) => {
        throw new Error(`exception ${exception}`)
      })
  }

  render() {
    const config = { containerClassName: 'open-weather-map' }
    return (
      <div>
        <OpenWeatherMap data={this.state.data} config={config} />
        <FeatureTogglesPage />
      </div>
    )
  }
}

export default App
