var React = require('react');

var Main = React.createClass({
  render: function() {
    // this component will render "Hello from Main" and any nestec components
    // this.props.children refers to nested component
    return(
      <div className="main-container">
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;
