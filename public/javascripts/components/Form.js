const React = require('react');

const Form = React.createClass({
  getInitialState() {
    return { activity: '', collectionType: this.props.collectionType };
  },
  handleActivityChange(event) {
    this.setState({ activity: event.target.value });
  },
  onSave() {
    console.log('this.state:', JSON.stringify(this.state));
  },
  render() {
    return (
      <tr>
        <td>
          <input
            className="form-control"
            type="text"
            placeholder="add activity"
            value={this.state.activity}
            onChange={this.handleActivityChange} />
        </td>
        <td>
          <a onClick={this.onSave}>
            <span className="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>
          </a>
        </td>
      </tr>);
  }
});

module.exports = Form;