/** created by @neerajpro*/
import React, { PropTypes } from 'react';
import {Button} from 'react-foundation';

export default React.createClass({

    displayName: 'SubmitButton',

    propTypes: {
        label: PropTypes.string
    },

    contextTypes: {
        isFormValid: PropTypes.func.isRequired,
        submit: PropTypes.func.isRequired
    },

    getDefaultProps() {
        return {
            label: 'Submit'
        };
    },

    render() {
        return (
            <Button
                primary
                //disabled={!this.context.isFormValid()}
                label={this.props.label}
                onsubmit={this.context.submit}
            >SUBMIT</Button>
        );
    }
});