var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router/lib/Router');
var Route = require('react-router/lib/Route');
var browserHistory = require('react-router/lib/browserHistory');
var IndexRoute = require('react-router/lib/IndexRoute');
var MainLayout = require('./MainLayout');
var Portfolio = require('./Portfolio');
var Home = require('./Home');
var UserList = require('./UserList');
var Contact =  require('./Contact');
require("./App.css");





ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}> 
          <IndexRoute component={Home}/>
      		<Route path="PORTFOLIO" component={Portfolio} />
      		<Route path="SERVICES" component={UserList} />
      		<Route path="CONTACT" component={Contact} />
    </Route>
  </Router>,
  document.getElementById('root')
);







