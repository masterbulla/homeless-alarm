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
        <table className="table table-striped">
          <tbody>
            {activities}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = Activities;