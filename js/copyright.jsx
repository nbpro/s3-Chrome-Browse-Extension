var React = require('react');

var copyrightStyle = 'copyright';

var CopyRight = React.createClass({
    render : function(){
        return(
            <div className={copyrightStyle}>Build with Love by Neerajpro </div>
        )
    }
});

module.exports = CopyRight;