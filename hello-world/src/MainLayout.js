var React = require('react');
var Link = require('react-router/lib/Link');
var IndexLink = require('react-router/lib/IndexLink');
var WidgetList = require('./WidgetList');




var MainLayout = React.createClass({
  render: function() {
    return (
    	<div>
			<nav className="navbar navbar-default">
			  <div className="container">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>                        
			      </button>
			      <a className="navbar-brand" href="#myPage">React</a>
			    </div>
			    <div className="collapse navbar-collapse" id="myNavbar">
			      <ul className="nav navbar-nav navbar-right">
			       <li><IndexLink to="/" activeClassName="active">ABOUT</IndexLink></li>
			       <li><Link to="/PORTFOLIO"  activeClassName="active">Portfolio</Link></li>
			       <li><Link to="/SERVICES"  activeClassName="active">SERVICES</Link></li>
			       <li><Link to="/CONTACT" activeClassName="active">CONTACT</Link></li>
			      </ul>
			    </div>
			  </div>
			</nav>
			<div className="container-fluid text-center paddingT">    
			    <div className="row content">
			          <div className="col-sm-2 sidenav">
							<div className="list-group">
							<a href="#" className="list-group-item"><WidgetList firstItem="First Item" /></a>
							<a href="#" className="list-group-item"><WidgetList secondItem="Second Item" /></a>
							<a href="#" className="list-group-item"><WidgetList thirdItem="Third Item" /></a>
							</div>
			          </div>
			          <div className="col-sm-8 text-left"> 
			            {this.props.children}
			          </div>
			          <div className="col-sm-2 sidenav">
			              <div className="well">
			                <p>ADS</p>
			              </div>
			          <div className="well">
			            <p>ADS</p>
			          </div>
			        </div>
			    </div>
			</div>

		</div>
    );
  }
});

module.exports = MainLayout;
