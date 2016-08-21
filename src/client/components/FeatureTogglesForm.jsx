import React from 'react'

const FeatureTogglesForm = ({ toggles }) => (
  <pre>
    {JSON.stringify(toggles, null, 4) }
  </pre>
)

FeatureTogglesForm.propTypes = {
  toggles: React.PropTypes.object,
}

export default FeatureTogglesForm
