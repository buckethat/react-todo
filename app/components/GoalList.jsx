var React = require('react');
var Goal = require('Goal');

var GoalList = React.createClass({
  render: function () {
    var {goals} = this.props;
    var renderGoals = () => {
      if (goals.length === 0) {
        return (
          <p className="container__message"> no goals yet </p>
        );
      }
      return goals.map((goal) => {
        return (
          <Goal key={goal.id} {...goal}/>
        );
      });
    };

    return (
      <div>
        {renderGoals()}
      </div>
    )
  }
});

module.exports = GoalList;
