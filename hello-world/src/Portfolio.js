var React = require('react');
var WidgetList = require('./WidgetList');

var Portfolio =  React.createClass({
	render: function(){
		return(
				<div className="container-fluid text-center bg-grey">
					<h2>Portfolio</h2><br />
  					<h4>What we have created</h4>
  					<div className="row text-center">
  						<div className="col-sm-4">
  							<div className="thumbnail">
  								<img src="http://www.w3schools.com/bootstrap/paris.jpg" alt="Paris" width="400" height="300"/>
  								<strong><WidgetList firstItem="Yes, we built Paris" /></strong>
  								<p>Yes, we built Paris</p>
  							</div>
  						</div>
  						<div className="col-sm-4">
  							<div className="thumbnail">
  								<img src="http://www.w3schools.com/bootstrap/newyork.jpg" alt="New York" width="400" height="300"/>
  								<strong><WidgetList secondItem="We built New York" /></strong>
  								<p>Yes, we built Paris</p>
  							</div>
  						</div>
  						<div className="col-sm-4">
  							<div className="thumbnail">
  								<img src="http://www.w3schools.com/bootstrap/sanfran.jpg" alt="San Francisco" width="400" height="300"/>
  								<strong><WidgetList thirdItem="Yes, San Fran is ours" /></strong>
  								<p>Yes, we built Paris</p>
  							</div>
  						</div>
  					</div>
  					
				</div>

			);
	}
});

module.exports = Portfolio;
