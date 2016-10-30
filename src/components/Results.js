var React = require('react');
var PropTypes = React.PropTypes;

function displayObj(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function Results(props) {
  return(
    <div>Results: {displayObj(props)}</div>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}
module.exports = Results;
