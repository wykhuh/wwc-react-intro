var React = require('react');
function displayObj(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle (props) {
  return props.isLoading === true
    ? <p>Loading</p>
    : <div>Confirm Battle: {displayObj(props)}</div>
}

module.exports = ConfirmBattle;
