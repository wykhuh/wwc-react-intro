var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
  // after component loads, grab playerOne and playerTwo from url.
  // then connect to github to get info for each player
  componentDidMount: function() {
    var query = this.props.location.query;
    console.log('query', query);
  },

  render: function() {
    return (
      <ConfirmBattle />
    );
  }

});

module.exports = ConfirmBattleContainer;
