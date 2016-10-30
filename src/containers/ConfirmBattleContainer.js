var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  getInitialState: function() {
    return {
      // it take sometime to connect to github api, so add isLoading flag
      isLoading: true,
      // playersInfo is the info we get from the github api
      playersInfo: []
   }
  },

  // after component loads, grab playerOne and playerTwo from url.
  // then connect to github to get info for each player
  componentDidMount: function() {
    var query = this.props.location.query;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function(players){
        console.log('players', players)
      });
  },

  render: function() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
      />
    );
  }

});

module.exports = ConfirmBattleContainer;
