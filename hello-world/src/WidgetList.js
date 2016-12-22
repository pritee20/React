var React = require('react');
var WidgetList = React.createClass({
  render: function() {
    return (
    	<p>
		{this.props.firstItem}
		{this.props.secondItem}
		{this.props.thirdItem}
		</p>
      )
  }
});
module.exports = WidgetList;