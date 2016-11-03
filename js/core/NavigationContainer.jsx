let React = require('react');
var Modal = require('react-modal');
import {Button,Colors}  from 'react-foundation';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    },
};

/**
 * created by @neerajpro on 2nd Nov 2016
 * */

let NavigationContainer = React.createClass({

    getInitialState: function() {
        return { modalIsOpen: false };
    },

    openModal: function() {
        this.setState({modalIsOpen: true});
    },

    afterOpenModal: function() {
        // references are now sync'd and can be accessed.
        //this.refs.subtitle.style.color = '#f00';
    },

    closeModal: function() {
        this.setState({modalIsOpen: false});
    },

    render : function(){
        return(
            <div className="navigation-container">
                <div className="Right">
                    <Button color={Colors.SUCCESS} style={{cursor: 'pointer'}}>
                        <a onClick={this.openModal}>+Connection</a>
                    </Button>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="S3-Chrome-Extension-Connection-test"
                    >
                        <i onClick={this.closeModal}>close</i>
                        <div>this is connection modal container</div>
                        <form></form>
                    </Modal>
                </div>
            </div>
        );
    },
});

module.exports = NavigationContainer;
