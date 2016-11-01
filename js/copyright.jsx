var React = require('react');

var copyrightStyle = 'copyright';

var CopyRight = React.createClass({
    render : function(){
        return(
            <div className={copyrightStyle}>@copyright 2016 </div>
        )
    }
});

module.exports = CopyRight;