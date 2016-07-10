const React = require('react');

const Activity = React.createClass({
  onClick(data) {
    console.log('data:', data);
  },
  render() {
    return (
      <tr>
        <td>
          {this.props.data.description}
        </td>
        <td>
          <a href="#" onClick={() => this.onClick(this.props.data) }>
            <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
          </a>
        </td>
      </tr>);
  }
});

module.exports = Activity;