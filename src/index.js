// React can work in various enviroment. Since we are making a webapp, use ReactDom
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

ReactDOM.render(routes, document.getElementById('root'));
