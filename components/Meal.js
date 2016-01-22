var React = require('react');


var Meal = React.createClass({
  post: function(data) {
    return $.ajax({
      type: 'POST',
      url: '/stats',
      data: JSON.stringify(data),
      contentType: 'application/json'
    })
  },

  handle: function(e) {
    e.preventDefault();
    var data = {
      userName: React.findDOMNode(this.refs.userName).value,
      champion: React.findDOMNode(this.refs.champion).value,
      season: React.findDOMNode(this.refs.season).value
    };
    var that = this;
    this.post(data).done(function(res) {
      that.props.update(res);
    });
  },

  render: function() {
    return (
      <div id='Meal'>
        <form id="macros" onSubmit={this.handle}>
          <input type="text" name="name" ref="name" placeholder="name" /><br />
          <input type="text" name="serving" ref="serving" placeholder="serving" /><br />
          <input type="text" name="calorie" ref="calorie" placeholder="calorie" /><br />
          <input type="text" name="fat" ref="fat" placeholder="fat" /><br />
          <input type="text" name="fat" ref="fat" placeholder="fat" /><br />
          <input type="text" name="fat" ref="fat" placeholder="fat" /><br />
          
          <input type="submit" className="hidden" />
        </form>
      </div>
    );
  }
});

  render: function () {
    return (
      <div id='Meal'>
        Meal
      </div>
    )
  }
});

module.exports = Meal;


