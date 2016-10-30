var React = require('react');
var transparentBg = require('../styles').transparentBg;

var PromptContainer = React.createClass({
  // context lets you pass items to components without using props
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  // user getInitialState to give a component state
  getInitialState: function() {
    // return an object that has all the state properties
    return {
      username: ''
    }
  },

  onUpdateUser: function(e) {
    // update the state using this.setState
    this.setState({
      // e.target.value is what peope enter in the input field
      username: e.target.value
    })
  },

  onSubmitUser: function(e) {
    e.preventDefault();
    // reset username
    this.setState({
      username: ''
    })

    // routeParams are the wildcard segments.

    // if the url has a playerOne route params,
    // go to /battle?playerOne=xxx&playerTwo=xxx
    if(this.props.routeParams.playerOne) {
      // router.push({pathname: xxx, query: xxx})
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })

    // else go to playerTwo/:playerOne
    } else {
      // router.push(path)
      this.context.router.push('/playerTwo/' + this.state.username)
    }

  },

  render: function() {
    return(
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
        {/* to access props pased into router, user this.props.route */}
        <h1>{this.props.route.header}</h1>
        <div className="col-sm-12">
          <form onSubmit={this.onSubmitUser}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                // sync input field with the state.
                // when input value changes, run this.onUpdateUser
                onChange={this.onUpdateUser}
                value={this.state.username}
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
})

module.exports = PromptContainer;
