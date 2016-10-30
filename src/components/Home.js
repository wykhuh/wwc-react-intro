var React = require('react');
var ReactRouter = require('react-router');

var Home = React.createClass({
  render: function() {
    return(
      <div className="jumbotron col-sm-12 text-center">
        <h1>Github Battle</h1>
        <p className='lead'>Who is the bigger geek?</p>
      </div>
    )
  }
})

module.exports = Home;
