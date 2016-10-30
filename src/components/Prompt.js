var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

// if you have a component that only renders UI,you can use a function
// that returns UI. stateless functional component
function Prompt (props) {
  return(
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
      {/* to access props pased into router, user this.props.route */}
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              // sync input field with the state.
              // when input value changes, run this.onUpdateUser
              onChange={props.onUpdateUser}
              value={props.username}
              placeholder="Github Username"/>
          </div>
          <div className="form-group col-sm-3 col-sm-offset-4">
            <button
              className="btn btn-block btn-success"
              type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

Prompt.propTypes =  {
  header: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired
}

module.exports = Prompt;
