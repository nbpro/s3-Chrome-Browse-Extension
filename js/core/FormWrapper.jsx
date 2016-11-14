/**created by @neerajpro on 10th Nov 2016 */
import React, {PropTypes} from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { connect } from  'react-redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import Form from './Form.jsx';
import * as actions from './../helper/actions.jsx';
import store from './../helper/store.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const SmartForm = connect(state => state, actions)(
    Form
);
// cutsom logger from redux
const reduxMiddleware = applyMiddleware(thunk, createLogger());

export default props => (
    <Provider store={compose(reduxMiddleware)(createStore)(store)}>
        <SmartForm {...props}/>
    </Provider>
);

export {default as Text} from './Text.jsx';
export {default as SubmitButton} from './SubmitButton.jsx';