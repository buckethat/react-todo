var React = require('react');

var AddGoal = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var goalText = this.refs.goalText.value;

    if (goalText.length > 0) {
      this.refs.goalText.value = '';
      this.props.onAddGoal(goalText);
    } else {
      this.refs.goalText.focus();
    }

  },

  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="goalText" placeholder="What is your goal?" />
          <button className="button expanded">Add goal</button>
        </form>
      </div>
    );
  }


});


module.exports = AddGoal;
