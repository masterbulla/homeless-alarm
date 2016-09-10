import React from 'react'

const Row = ({ name, value, handleAction }) => {
  let selected = value || value === undefined
  let featureName = name

  const handleNameOnChange = (event) => {
    featureName = event.target.value
  }

  const makeAction = (type) => ({
    type,
    payload: { featureName, selected },
  })

  const handleOnClick = () => {
    if (!featureName) return
    handleAction(makeAction(name === featureName ? 'del' : 'add'))
  }

  const handleValueOnChange = () => {
    selected = !selected
    if (name) {
      handleAction(makeAction('upd'))
    }
  }

  const btnAction = (
    name
      ? <i className="icon-minus-squared" onClick={handleOnClick} />
      : <i className="icon-plus-squared" onClick={handleOnClick} />
  )

  return (
    <tr>
      <td>
        <input
          defaultValue={name}
          onChange={handleNameOnChange}
          className={name ? 'disabled' : ''}
          />
      </td>
      <td>
        <select defaultValue={value} onChange={handleValueOnChange}>
          <option>true</option>
          <option>false</option>
        </select>
      </td>
      <td>
        {btnAction}
      </td>
    </tr>)
}

Row.propTypes = {
  name: React.PropTypes.string,
  value: React.PropTypes.bool,
  handleAction: React.PropTypes.func,
}

export default Row
