var React = require('react');
var Results = require('../components/Results');

var ResultsContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      scores: []
    }
  },

  componentDidMount: function() {
    // this.props.location.state.playersInfo
    console.log(this.props)
  },

  render: function(){
    return(
      <Results
        isLoading={this.state.isLoading}
        playersInfo ={this.props.location.state.playersInfo}
        scores={this.state.scores}
      />
    )
  }
})

module.exports = ResultsContainer;
