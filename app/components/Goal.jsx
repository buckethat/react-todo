var React = require('react');
var moment = require('moment');

var Goal = React.createClass({
  render: function () {
    var {id, text, createdAt} = this.props;
    var goalClassName = 'goal';
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    return (
      <div className={goalClassName}>
      <p>  I, Mark Loper, will <u> {text} </u> by <u> December 31, 2016 </u> or else I will lose <u> $50. </u>
    </p>

        <p className="goal__subtext"> {renderDate()} </p>


    </div>
    )
  }
});

module.exports = Goal;
