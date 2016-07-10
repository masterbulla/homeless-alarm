const React = require('react');
const Activity = require('./Activity');

const Activities = React.createClass({
  render() {
    var activities = this.props.data.map((activity) => {
      return (
        <Activity key={activity.id} data={activity} />);
    });
    return (
      <div>
        <h3>{this.props.heading}</h3>
        <ul>
          {activities}
        </ul>
      </div>
    );
  }
});

module.exports = Activities;