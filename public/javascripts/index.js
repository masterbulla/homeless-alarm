const React = require('react');
const ReactDOM = require('react-dom');

const App = React.createClass({
  render: function () {
    return (<h2>[TODO]</h2>)
  }
});

ReactDOM.render(
  <App />,
  window.document.getElementById('target')
);