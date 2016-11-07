let React = require('react');
import{Row,Column} from 'react-foundation';

let AccessCode = React.createClass({
    render: function () {
        return(
            <Row small={12}>
                <Column small={6}>
                    Access Key
                </Column>
                <Column small={6}>
                    <input type="text" name="access-name" value="" placeholder="Bucket Access Code"></input>
                </Column>
            </Row>
        )
    }
});

module.exports = AccessCode;