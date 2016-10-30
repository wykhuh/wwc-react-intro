var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
// need to have history for the current version of the router.
// use browserHistory to get paths like site.com/home
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;

var Main = require('../components/Main');
var Home = require('../components/Home');
var PromptContainer = require('../containers/PromptContainer');
var ConfirmBattleContainer = require("../containers/ConfirmBattleContainer");
var ResultsContainer = require("../containers/ResultsContainer");

// react-router works by mapping the url to a component.
// we will always render Main.

// IndexRoute is the active route when none of the outer routes match.
// Home is active when none of the other routes match
var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      {/* we can pass props to Route component */}
      <Route path='playerOne' header='Player One' component={PromptContainer}/>
      <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer}/>
      <Route path='battle' component={ConfirmBattleContainer}/>
      <Route path='results' component={ResultsContainer}/>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

module.exports = routes;
