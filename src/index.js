var React = require('react');
// React can work in various enviroment. Since we are making a webapp, use ReactDom
var ReactDOM = require('react-dom');

// save the result of React.createClass into variable HelloWorld.
// createClass will create a new component.
var HelloWorld = React.createClass ({
  // every component must have render
  render: function() {
    // return JSX.
    // must return one parent element
    return (
      // to access the data that we pass in, use this.props
      <div>Hello {this.props.name}!</div>
    )
  }
});

// render takes two parameters: component and an element in the DOM
// render the component into the DOM

// to pass data into an component, we add property  and data
ReactDOM.render(<HelloWorld name="Jane"/>, document.getElementById('root'));
