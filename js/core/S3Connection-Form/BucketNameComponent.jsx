let React = require('react');
import{Row,Column,Colors} from 'react-foundation';

let BucketName = React.createClass({
    render: function () {
        return(
            <Row small={12}>
                <Column small={6}>
                    Bucket Name
                </Column>
                <Column small={6}>
                    <input type="text" name="Bucket-name" value="" placeholder="Enter Bucket Name here"></input>
                </Column>
            </Row>
        )
    }
});

module.exports = BucketName;