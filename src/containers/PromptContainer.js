var React = require('react');
var Prompt = require('../components/Prompt');

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

  handleUpdateUser: function(e) {
    // update the state using this.setState
    this.setState({
      // e.target.value is what peope enter in the input field
      username: e.target.value
    })
  },

  handleSubmtUser: function(e) {
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
      <Prompt
        onSubmitUser={this.handleSubmtUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username}
      />
    )
  }
})

module.exports = PromptContainer;
