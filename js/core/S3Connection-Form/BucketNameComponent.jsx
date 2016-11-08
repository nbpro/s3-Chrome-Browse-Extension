let React = require('react');
import{Row,Column,Colors} from 'react-foundation';

let BucketName = React.createClass({
    bucketNameChange : function(e){
        this.setState({bucketname: e.target.value});
    },

    render: function () {
        return(
            <Row small={12}>
                <Column small={6}>
                    Bucket Name
                </Column>
                <Column small={6}>
                    <input type="text"
                           name="Bucket-name"
                           placeholder="Enter Bucket Name here"
                           onChange={this.bucketNameChange}
                    ></input>
                </Column>
            </Row>
        )
    }
});

module.exports = BucketName;