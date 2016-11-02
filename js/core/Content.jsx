var React = require('react');

let MainContainer = require('./MainContainerBox.jsx');

var Content = React.createClass({

    getInitialState: function() {
        return {
            content: "This is get Initial State",
        };
    },
    handleClick : function () {
        return(console.log("click handled captured"));
    },
    render: function(){
        return(
            <div className="main">
                <MainContainer/>
            </div>
        )
    }
});

module.exports = Content;
