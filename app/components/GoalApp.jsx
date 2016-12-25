var React = require('react');
var GoalList = require('GoalList');
var AddGoal = require('AddGoal');
var uuid = require('node-uuid');
var moment = require('moment');


var GoalApp = React.createClass({
  getInitialState: function () {
    return {
      goals: [
        {
          id: uuid(),
          text: 'finish my screen play'
        }, {
          id: uuid(),
          text: 'lose 15 pounds'
        }, {
          id: uuid(),
          text: 'quit smoking'
        }, {
          id: uuid(),
          text: 'find true happiness',
        }
      ]
    };
  },
  handleAddGoal: function (text) {
    this.setState({
      goals: [
        ...this.state.goals,
        {
          id: uuid(),
          text: text,
          createdAt: moment().unix()
        }
      ]
    })
  },
  render: function () {
    var {goals} = this.state;

    return (
      <div>
      <h1 className="page-title"> #GOALS </h1>

      <div className="row">
        <div className="column small-centered small-11 medium-6 large-5">
          <div className="container">
          <AddGoal onAddGoal={this.handleAddGoal}/>
          <GoalList goals={goals}/>
          </div>
        </div>
      </div>


      </div>
    )
  }
});

module.exports = GoalApp;
