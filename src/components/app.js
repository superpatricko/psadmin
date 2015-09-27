/*eslint-disable strict */ // Disabling check because we cna't run strict mode here. jQuery needs a global var

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery'); // Global variable for jQuery to make Bootstrap happy

var App = React.createClass({
	render: function() {
		return (
			<div>
				<Header/>
				<div className="container-fluid">
					<RouteHandler/>
				</div>
			</div>
		);
	}
});

module.exports = App;