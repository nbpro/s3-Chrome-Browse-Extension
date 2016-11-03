let React = require('react');

let NavigationContainer = require('./NavigationContainer.jsx');

let MainContainerBox = React.createClass({
    render :function() {
        return(
            <div className="">
                <NavigationContainer/>
            </div>
        )
    }

});

module.exports = MainContainerBox;