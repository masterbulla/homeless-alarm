const React = require('react');
const Activity = require('./Activity');
const Form = require('./Form');

const Activities = React.createClass({
  render() {
    var activities = this.props.data.map((activity) => {
      return (
        <Activity key={activity.id} data={activity} />);
    });
    return (
      <div>
        <h3>{this.props.heading}</h3>
        <table className="table table-striped table-condensed">
          <tbody>
            {activities}
            <Form collectionType={this.props.collectionType} />
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = Activities;