let React = require('react');
let Modal = require('react-modal');
import FormComponent,{Text,SubmitButton} from './Form.jsx';
import {Button,
        Colors,
        CloseButton,
        Label,
        Row,
        Column,
        Callout,
        Block,
        Breakpoints
        }from 'react-foundation';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        height                : '80%',
        width                 : '70%'
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
                        <div className="Right">
                            <CloseButton onClick={this.closeModal}>x</CloseButton>
                        </div>
                        <div className="navigation-label">
                            <Label>Connection Details</Label>
                        </div>
                        <Form onSubmit={data => console.log(data)}>
                            <Text
                                name="name"
                                validate={['required']}
                                placeholder="Type your name here"
                                label="Your name"/>
                            <Text
                                name="email"
                                validate={['required', 'email']}
                                placeholder="Type your email here"
                                label="E-mail"/>
                            <Text
                                name="website"
                                validate={['url']}
                                placeholder="Type your website url here"
                                label="Website"/>

                            <SubmitButton/>
                        </Form>
                    </Modal>
                </div>
            </div>
        );
    },
});

module.exports = NavigationContainer;
