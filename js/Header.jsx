var React = require('react');

var header = 'header';
var Logo = require('./logo.jsx')

var Header = React.createClass({
    render: function(){
        return (
            <div className={header}>
                <div className="logo-box">
                    <Logo/>
                </div>
                <div className="header-title">Amazon S3 Browser</div>
            </div>
        );
    }
});

module.exports = Header;