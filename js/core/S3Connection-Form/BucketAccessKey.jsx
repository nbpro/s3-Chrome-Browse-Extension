let React = require('react');
import{Row,Column} from 'react-foundation';

let AccessCode = React.createClass({

    onChangeAccessCode : function(e){
        this.setState({bucketAccessCode: e.target.value});
        debugger;
        alert(this.state.BucketAccessCode);
    },

    render: function (){
        return(
            <Row small={12}>
                <Column small={6}>
                    Access Key
                </Column>
                <Column small={6}>
                    <input
                        type="text"
                        name="access-name"
                        placeholder="Bucket Access Code"
                        onchange={this.onChangeAccessCode}
                    />
                </Column>
            </Row>
        )
    }
});

module.exports = AccessCode;