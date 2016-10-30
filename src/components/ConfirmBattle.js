var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

function ConfirmBattle (props) {
  return props.isLoading === true
    ? <p>Loading</p>
    : <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      <h1>Confirm Players</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <div className="col-sm-6">
          <p className="lead">Player 1</p>
          Player 1 Info
        </div>
        <div className="col-sm-6">
          <p className="lead">Player 2</p>
          Player 2 Info
        </div>
      </div>
      <div className='col-sm-8 col-sm-offset-2'>
        <div className='col-sm-12' style={styles.space}>
          Intitiate Battle
          </div>
        <div className='col-sm-12' style={styles.space}>
          Reselect Players
        </div>
      </div>
    </div>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired
}

module.exports = ConfirmBattle;
