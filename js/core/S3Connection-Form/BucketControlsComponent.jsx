let React = require('react');
import {Row,Column,Button,Colors} from 'react-foundation';

let BucketControlComponent = React.createClass({
    render : function(){
        return(
            <div className="">
                <Row small={12}>
                    <Column small={3} centerOnSmall>
                        <Button color={Colors.SUCCESS} style={{cursor: 'pointer'}}>
                            <a>TEST</a>
                        </Button>
                    </Column>
                    <Column small={3} centerOnSmall>
                        <Button color={Colors.SUCCESS} style={{cursor: 'pointer'}}>
                            <a>TEST</a>
                        </Button>
                    </Column>
                    <Column small={3} centerOnSmall>
                        <Button color={Colors.SUCCESS} style={{cursor: 'pointer'}}>
                            <a>TEST</a>
                        </Button>
                    </Column>
                </Row>
            </div>
        )
    }

});

module.exports = BucketControlComponent;