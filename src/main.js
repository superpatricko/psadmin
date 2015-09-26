$ = jQuery = require('jquery'); // two different ways to reference jQuery. 
								// Bootstrap expects jQuery to be in the global namespace
var React = require('react');
var Home = require('./components/homePage');
var Authors = require('./components/authors/authorPage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');

(function(win) {
	"use strict";

	var App = React.createClass({
		render: function() {
			var Child;

			// look at the route properties
			switch(this.props.route) {
				case 'about': Child = About; break;
				case 'authors': Child = Authors; break;
				default: Child = Home;
			}

			return (
				<div>
					<Header/>
					<Child/>
				</div>
			);
		}
	});

	function render() {
		var route = win.location.hash.substr(1);	
		React.render(<App route={route} />, document.getElementById('app'));
	}

	win.addEventListener('hashchange', render);
	render();
})(window);
