/* global fetch */

import React from 'react'

class FeatureTogglesPage extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = { toggles: {} }
  }

  componentDidMount() {
    fetch('/v1/feature-toggles')
      .then((response) => (response.json())).then((json) => {
        this.setState({ toggles: json })
      }).catch((exception) => {
        throw new Error(`exception ${exception}`)
      })
  }

  render() {
    return (
      <pre>
        {JSON.stringify(this.state.toggles, null, 2) }
      </pre>
    )
  }
}

FeatureTogglesPage.propTypes = {
  toggles: React.PropTypes.object,
}

export default FeatureTogglesPage
