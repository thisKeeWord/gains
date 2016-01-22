var React = require('react');

var Meal = require('./Meal');

var Daily = React.createClass({
  render: function () {
    return (
      <div id='Daily'>
        Daily
        <Meal />
      </div>
    )
  }
});

module.exports = Daily;


