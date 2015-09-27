"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
	render: function() {
		// whatever the render function returns is what's going to be displayed on the screen
		// div uses className because class is a reserved word in JS
		// when it gets converted into JS, it'll be called class
		return (
			<div className="jumbotron">
				<h1>Pluralsight Administration</h1>
				<p>React, React Router, and Flux for ultra responsive web apps.</p>
				<Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
			</div>
		);
	}
});

module.exports = Home;