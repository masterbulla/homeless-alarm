/* global fetch */

import React from 'react'
import FeatureTogglesForm from '../components/FeatureTogglesForm'

class FeatureTogglesPage extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = { toggles: {} }
  }

  componentDidMount() {
    fetch('/v1/feature-toggles')
      .then((response) => (response.json()))
      .then((json) => {
        this.setState({ toggles: json })
      })
      .catch((exception) => {
        throw new Error(`exception ${exception}`)
      })
  }

  render() {
    return (
      <FeatureTogglesForm toggles={this.state.toggles} />
    )
  }
}

export default FeatureTogglesPage
