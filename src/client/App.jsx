import React from 'react'

const App = ({ toggles }) => (
  <div>
    <div className="row clear pad-top-5 pad-bottom-5">
      <div className="col-12 text-center">
        <span>(╯°□°）╯︵ ┻━┻</span>
      </div>
    </div>
    <div className="row clear pad-top-5 pad-bottom-5">
      <div className="col-12">
        <textarea
          className="field"
          cols="30"
          rows="10"
          defaultValue={JSON.stringify(toggles, null, 2)}
        />
      </div>
    </div>
  </div>
)

App.propTypes = {
  toggles: React.PropTypes.object,
}

export default App
