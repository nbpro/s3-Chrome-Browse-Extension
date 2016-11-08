let React = require('react');
import {Row,Column,Button,Colors} from 'react-foundation';

let BucketControlComponent = React.createClass({
    render : function(){
        return(
            <div className="bucket-control">
                <Row small={12}>
                    <Column small={4}>
                        <Button color={Colors.SUCCESS} style={{cursor: 'pointer'}}>
                            <a>TEST</a>
                        </Button>
                    </Column>
                    <Column small={4}>
                        <Button color={Colors.WARNING} style={{cursor: 'pointer'}}>
                            <a>CONNECT</a>
                        </Button>
                    </Column>
                    <Column small={3}>
                        <Button color={Colors.ALERT} style={{cursor: 'pointer'}}>
                            <a>RESET</a>
                        </Button>
                    </Column>
                </Row>
            </div>
        )
    }

});

module.exports = BucketControlComponent;