let React = require('react');
/**
 * created by @neerajpro on 2nd Nov 2016
 * */

let NavigationContainer = React.createClass({
    render : function(){
        return(
            <div className="navigation-container">
                <div className="Right">
                    <button className="button s3-button-add-connection">
                        <a onClick={this.addNewS3Connection} style={{cursor: 'pointer'}}>+Connection</a></button>
                </div>
            </div>
        );
    },
    addNewS3Connection: function($evt){
        // Save it using the Chrome extension storage API.
        chrome.storage.sync.set({'value': "x"}, function() {
            // Notify that we saved.
            console.log('Settings saved');
        });
        chrome.storage.sync.get('value', function (obj) {
            console.log('value', obj);
        });
    }

});

module.exports = NavigationContainer;
