$ = jQuery = require('jquery'); // two different ways to reference jQuery. 
								// Bootstrap expects jQuery to be in the global namespace
var React = require('react');
var Home = require('./components/homePage');

React.render(<Home />, document.getElementById('app'));