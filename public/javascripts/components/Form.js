const React = require('react');

const Form = React.createClass({
  getInitialState() {
    return { activity: '', collectionType: this.props.collectionType };
  },
  handleActivityChange(event) {
    this.setState({ activity: event.target.value });
  },
  handleClick(event) {
    // todo: add check ?!?
    event.preventDefault();
    this.props.onActivitySave(this.state); // info: I think I should submit the form here !?!
    this.setState({ activity: '' });
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
          <a className="btn btn-default" onClick={this.handleClick}>
            <span className="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>
          </a>
        </td>
      </tr>
    );
  }
});

module.exports = Form;