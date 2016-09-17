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
    const appid = '96743bb1629701cc262e4f37c353f040'
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}&units=metric`)
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
