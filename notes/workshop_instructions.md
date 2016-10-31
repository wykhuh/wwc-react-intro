# WWCLA: Intro to React.js Workshop

## What is React.js?

[React](https://facebook.github.io/react/) is a javascript library to create interactive, reusable UI components.

## What are components?

Components are reusable piece of a website. They consist of HTML, CSS, JS, and data.

Instead of thinking of a web page as one thing, think of a web page as being made of many components.

Define all the logic, html, etc for a component. Refer to the component using  `<ComponentName />`

![component](http://maketea.co.uk/images/2014-03-05-robust-web-apps-with-react-part-1/wireframe_deconstructed.png)

image from MakeTea.co.uk

## Features of React

#### component-based

 React apps are made of  [components](https://facebook.github.io/react/docs/components-and-props.html).

#### one way data flow

When you have nested components, you pass data from the parent to the nested children. You cannot pass data from the children the parent.

You pass data through props.

The data can be strings, numbers, booleans, arrays, objects, functions.

#### view layer

React is just the view layer. It takes in data and returns a view. When working on web apps, the view is in HTML.

#### JSX

[JSX](https://facebook.github.io/react/docs/introducing-jsx.html) is a Javascript syntax that resembles HTML. It's used in React to create components.

normal javascript

```js
var HelloWorld = React.createClass({
  displayName: "HelloMessage",
  render: function() {
    return React.createElement("div", null, "Hello World");
  }
});
```

JSX

```js
var HelloWorld = React.createClass({
  render: function(){
    return (
      <div>
        Hello World!
      </div>
    )
  }
});
```

notes

- className instead of class
- all tags must self-close

#### Virtual DOM

When data changes, instead of re-rendering the whole page, only components with changed data  are re-rendered.

React creates an in-memory representation of the DOM called the virtual DOM. When data changes, the virtual DOM is updated. React compares the old and new virtual DOM, and only updates the real DOM with the changes.

## What is create-react-app?

[create-react-app](https://github.com/facebookincubator/create-react-app) is
tool created by Facebook to make it easy to create React apps.

Before `create-react-app`, people had spend a lot of time setting up build tools (Gulp, Webpack, etc) to compile and run a React app.

## Code Time

create new app
```
create-react-app wwc-react-intro
cd wwc-react-intro/
npm start
```

```
steps 1, 2
```

## React Router

[react-router](https://github.com/ReactTraining/react-router) works by mapping the url to a component.

the router is a component.

```js
<Router>
  <Route path='/' component={Main} />
  <Route path='/about' component={About} />
</Router>
```

install react-router

```
npm i --save react-router
```

## Code Time

```
steps 3, 4
```

## CSS

There are various ways to style components.

use css classes

```css
/* style.css */

.red {
  color: white;
  background-color: red;
}
```

```js
require('./style.css');

function Hi () {
  return (
    <div className="red">Hi</div>
  )
}
```

using js objects with style attributes

```js
// styles.js

var styles = {
  red: {
    color: 'white',
    backgroundColor: 'red'
  }
}
```
```js
var styles = require('styles.js');

function Hi () {
  return (
    <div style="styles.red"></div>
  )
}
```

## Code Time

```
steps 5 - 10
```

## State

state  

1. an object that holds all the data in the application
2. an object that holds the data for a component; each component can have its own state

When the state (data) changes, React will automatically update the view (HTML).

## Dealing with State

initialize state

- use getInitialState to give a component state
- return an object that has all the state properties

```js

var PromptContainer = React.createClass({
  getInitialState: function() {
    return {
      username: ''
    }
  }
})

```

change state

-  update the state using setState()

```js
this.setState({
  username: 'new name'
})
```

## Code Time

```
steps  11, 12
```

## Context

[Context](https://facebook.github.io/react/docs/context.html) lets you pass items to components without using props.

You can use context to access  react-router properties inside components.

## Code Time

```
steps  13
```
## Container Components vs Presentational Components

Container components handles business logic and state.

Presentational components just handles presentational logic.

## Code Time

```
steps 14
```
## PropTypes

[PropTypes](https://facebook.github.io/react/docs/typechecking-with-proptypes.html) allows React to validate the props passed into a component.

You can check if the prop is the right type and if the prop is required.

## Code Time

```
steps 15
```

## Stateless Functional Components

If you have a component that doesn't have state, you can create a components by using a function.

The function takes optional props and returns a view.

normal component

```js
var Hello = React.createClass({
  render: function () {
    return (
      <div>Hello {this.props.name}</div>
    )
  }
})

```
stateless functional component

```js
function Hello (props) {
  return (
    <div>Hello {props.name}</div>
  )
}
```
## Code Time

```
steps 16-17
```

## Lifecycle methods

[Lifecycle methods](https://facebook.github.io/react/docs/react-component.html) are special methods that allow us to
hook into the views when specific conditions happen.

**getDefaultProps:** establish some default props in our component

**getInitialState:** set some initial state in our component

**componentWillMount:** called right before the component is added to the DOM

**componentDidMount:** called right after the component is added to the DOM.

**componentWillUnmount:** called right before the component is removed from the DOM

## Code Time

```
steps 18-20
```

## How to connect to APIs?

In order to connect with apis, we need to install a library to can make http calls.

We are using [axios](https://github.com/mzabriskie/axios). It is promise based http client.

install axios

```
npm i --save axios
```

## What are promises?

Promises are another way to deal with async code.

A Promise represents an operation that hasn't completed yet, but is expected in the future. [Modzilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Imagine `connect` is an async function that connects to an url and returns some data

`connect` using a callback
```js

connect('http://example.com', function(data) {
  // do something with data
})
```

`connect` using promises

```js

connect('http://example.com')
  .then( function(data) {
    // do something with data
  })
  .catch( function(error) {
    // do something with error
  })
```

## What is rate limiting?

Many APIs limit the number of requests a user can make.

[Github rate limits](https://developer.github.com/v3/#rate-limiting
)
- unauthenticated requests can make 60 requests per hour
- authenticated request can make up to 5,000 requests per hour


## Code Time

```
steps 21

connect to Github as unauthenticated, then as authenticated.
```

## Github OAuth application

To make an authenticated request, we need to create an [OAuth application](https://github.com/settings/developers).

- click `Register a new application`
- fill in `Application name`, `Homepage URL`, `Authorization callback URL`. You can use `http://example.com` for the URL fields
- click `Register application`
- Copy `Client ID` and `Client Secret`


## Code Time

```
steps 22-41
```
