const React = require('react');

const Activity = React.createClass({
  render() {
    return (
      <li>
        {this.props.data.description}
      </li>);
  }
});

module.exports = Activity;