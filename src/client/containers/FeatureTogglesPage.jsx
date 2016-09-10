/* global fetch */

import React from 'react'
import FeatureTogglesForm from '../components/FeatureTogglesForm'

class FeatureTogglesPage extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = { toggles: {} }
    this.handleAction = (action) => {
      if (action.type === 'add' || action.type === 'upd') {
        this.state.toggles[action.payload.featureName] = action.payload.selected
        this.setState({
          toggles: this.state.toggles,
        })
      }
      if (action.type === 'del') {
        delete this.state.toggles[action.payload.featureName]
        this.setState({
          toggles: this.state.toggles,
        })
      }
    }
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
      <FeatureTogglesForm toggles={this.state.toggles} handleAction={this.handleAction} />
    )
  }
}

export default FeatureTogglesPage
