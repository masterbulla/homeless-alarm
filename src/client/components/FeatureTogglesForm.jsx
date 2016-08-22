import React from 'react'
import _ from 'lodash'
import Row from './Row'

const FeatureTogglesForm = ({ toggles }) => {
  const rows = []
  _.forOwn(toggles, (value, key) => {
    rows.push(<Row key={key} name={key} value={value} />)
  })

  return (
    <div>
      <pre>
        {JSON.stringify(toggles, null, 2) }
      </pre>
      <table>
        <tbody>
          {rows}
          <Row key="new" name="" />
        </tbody>
      </table>
    </div>
  )
}

FeatureTogglesForm.propTypes = {
  toggles: React.PropTypes.object,
}

export default FeatureTogglesForm
