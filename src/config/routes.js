var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
// need to have history for the current version of the router.
// use browserHistory to get paths like site.com/home
var browserHistory = ReactRouter.browserHistory;

var Main = require('../components/Main');
var Home = require('../components/Home');

// react-router works by mapping the url to a component.
// we will always render Main.
// when on /home, render Main and Home
var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <Route path='/home' component={Home}></Route>
    </Route>
  </Router>
);

module.exports = routes;
