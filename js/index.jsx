var React  = require('react');

var Header = require('./Header.jsx');
var Content = require('./core/Content.jsx');
var Footer = require('./footer.jsx');

//style variables
var wrapper = 'wrapper';

var Index = React.createClass({
	render: function(){
		return (
			<div className={wrapper}>
				<Header/>
				<Content/>
				<Footer/>
			</div>
		);
	}
});

module.exports = Index;