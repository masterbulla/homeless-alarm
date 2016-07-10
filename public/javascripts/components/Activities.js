const React = require('react');
const Activity = require('./Activity');
const Form = require('./Form');

const Activities = React.createClass({
  handleActivitySave(activity) {
    console.log('activiy:', activity);
  },
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
            <Form collectionType={this.props.collectionType} onActivitySave={this.handleActivitySave} />
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = Activities;