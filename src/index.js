var React = require('react');
// React can work in various enviroment. Since we are making a webapp, use ReactDom
var ReactDOM = require('react-dom');

// save the result of React.createClass into variable HelloWorld.
// createClass will create a new component.
var HelloWorld = React.createClass ({
  // every component must have render
  render: function() {
    // return JSX.
    return (
      <div>Hello World!</div>
    )
  }
});

// render takes two parameters: component and an element in the DOM
// render the component into the DOM
ReactDOM.render(<HelloWorld />, document.getElementById('root'));
