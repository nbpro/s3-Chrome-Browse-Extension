let React = require('react');
import {Row,Column,Colors} from 'react-foundation';
let BucketNameComponent = require('./S3Connection-Form/BucketNameComponent.jsx');
let AccessCode = require('./S3Connection-Form/BucketAccessKey.jsx');
let SecurityToken = require('./S3Connection-Form/BucketSecurityTokenComponent.jsx');
let BucketControlComponent = require('./S3Connection-Form/BucketControlsComponent.jsx');

let S3ConnectionForm = React.createClass({
    render : function(){
        return(
            <div className="cm-form-box">
                <BucketNameComponent/>
                <AccessCode/>
                <SecurityToken/>
                <BucketControlComponent/>
            </div>
    );
    }

});
module.exports = S3ConnectionForm;


