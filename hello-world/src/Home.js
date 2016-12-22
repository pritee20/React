var React = require('react');
var ReactDOM = require('react-dom');
var WidgetList = require('./WidgetList');
var Home = React.createClass({
  render: function() {
    return (
    		<div id="about" className="container-fluid">
  			<div className="row">
    <div className="col-sm-8">
      <h2>ABOUT Page</h2><br />
      <WidgetList firstItem="PriteeA" secondItem="Pritee2B" thirdItem="Priteee3C"/>
      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <br /><button className="btn btn-default btn-lg">Get in Touch</button>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-signal logo"></span>
    </div>
  </div>
</div>


    	);
  }
});

ReactDOM.render((
  <Home />
), document.getElementById('root'));

module.exports = Home;