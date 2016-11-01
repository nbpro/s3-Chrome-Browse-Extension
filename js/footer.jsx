var React = require('react');

var footerClassName = 'footer';
var Copyright = require('./copyright.jsx');

var Footer = React.createClass({
    render : function(){
        return (
            <div className={footerClassName}>
                <Copyright/>
            </div>
        );
    }
});

module.exports = Footer;