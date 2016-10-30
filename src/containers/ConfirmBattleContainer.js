var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  // use contextTypes to get access to the router
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

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
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        })
      // use bind to access 'this' of outer function
      }.bind(this));
  },

  // redirect to 'results' when button is clicked
  handleInitiateBattle: function() {
    this.context.router.push({
      pathname: '/results',
      // push this.state.playersInfo through to '/results' route
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  },

  render: function() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
        onInitiateBattle={this.handleInitiateBattle}
      />
    );
  }

});

module.exports = ConfirmBattleContainer;
