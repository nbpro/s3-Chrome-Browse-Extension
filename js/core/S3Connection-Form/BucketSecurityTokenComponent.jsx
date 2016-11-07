let React = require('react');
import {Row,Column} from 'react-foundation';

let SecurityKey = React.createClass({
    render: function(){
        return(
            <Row small={12}>
                <Column small={6}>
                    Security Key
                </Column>
                <Column small={6}>
                    <input type="text" name="Security-key" value="" placeholder="Enter Bucket Security Token"></input>
                </Column>
            </Row>
        );
    }
});

module.exports = SecurityKey;