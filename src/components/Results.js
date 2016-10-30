var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');

function Results(props) {
  var winningIndex = 0;
  var losingIndex = 1;
  return(
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      <h1>Results</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header='Winner'>
          <UserDetails
            score={props.scores[winningIndex]}
            info={props.playersInfo[winningIndex]}
          />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Loser'>
          <UserDetails
            score={props.scores[losingIndex]}
            info={props.playersInfo[losingIndex]}
          />
        </UserDetailsWrapper>
      </div>
    </div>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}
module.exports = Results;
