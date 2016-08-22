import React from 'react'

const Row = ({ name, value }) => {
  let selected = value || value === undefined
  let featureName = name

  const handleOnClick = () => {
    console.log('featureName:', featureName, 'selected:', selected, 'action:', name === featureName ? 'del' : 'add')
  }

  const handleNameOnChange = (event) => {
    featureName = event.target.value
  }

  const handleValueOnChange = () => {
    selected = !selected
    if (name) {
      console.log('featureName:', featureName, 'selected:', selected, 'action:', 'upd')
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
}

export default Row
