var React = require('react');
var ReactDOM = require('react-dom');
var Daily = require('./Daily');
var Weekly = require('./Weekly');

var App = React.createClass({
  render: function () {
    return (
      <div id='App'>
        App
        <Daily />
        <Weekly />
      </div>
    )
  }
});

module.exports = App;

ReactDOM.render(<App />, document.getElementById('main-container'));
