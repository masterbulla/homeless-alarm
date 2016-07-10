const React = require('react');
const ReactDOM = require('react-dom');
const Activities = require('./components/Activities');
const $ = require('jquery');

const App = React.createClass({
  loadDataFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ data: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState() {
    return { data: { username: '', yesterday: [], today: [], impediments: [] } };
  },
  componentDidMount() {
    this.loadDataFromServer();
  },
  render() {
    return (
      <div>
        <h2>Stan-up v2.0 <small>{this.state.data.username}</small></h2>
        <Activities heading="Yesterday" data={this.state.data.yesterday} collectionType="yesterday" />
        <Activities heading="Today" data={this.state.data.today} collectionType="today" />
        <Activities heading="Impediments" data={this.state.data.impediments} collectionType="impediments" />
      </div>
    );
  }
});

ReactDOM.render(
  <App url="/v1/stand-up" />,
  window.document.getElementById('target')
);