var React = require('react');


var Meal = React.createClass({
  post: function(data) {
    return $.ajax({})
  },
      

  handle: function(e) {
    e.preventDefault();
    var data = {
      name: React.findDOMNode(this.refs.name).value,
      serving: React.findDOMNode(this.refs.serving).value,
      calorie: React.findDOMNode(this.refs.calorie).value,
      fat: React.findDOMNode(this.refs.fat).value,
      sodium: React.findDOMNode(this.refs.sodium).value,
      carbs: React.findDOMNode(this.refs.carbs).value,
      sugar: React.findDOMNode(this.refs.sugar).value,
      fiber: React.findDOMNode(this.refs.fiber).value,
      protein: React.findDOMNode(this.refs.protein).value,
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
          <input type="text" name="name" ref="name" placeholder="food name" /><br />
          <input type="text" name="serving" ref="serving" placeholder="serving" /><br />
          <input type="text" name="calorie" ref="calorie" placeholder="calorie" /><br />
          <input type="text" name="fat" ref="fat" placeholder="fat" />g<br />
          <input type="text" name="sodium" ref="sodium" placeholder="sodium" />mg<br />
          <input type="text" name="carbs" ref="carbs" placeholder="carbs" />g<br />
          <input type="text" name="sugar" ref="sugar" placeholder="sugar" />g<br />
          <input type="text" name="fiber" ref="fiber" placeholder="fiber" />g<br />
          <input type="text" name="protein" ref="protein" placeholder="protein" />g<br />
          <input type="submit" className="hidden" />
        </form>
      </div>
    );
  }
});

module.exports = Meal;


