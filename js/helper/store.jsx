import * as c from './constant.jsx';
import assign from 'lodash.assign';

/**
 * created by @neerajpro on 8th Nov 2016
 * */

const initialState = {
    values: {}
};

export default (state = initialState, action) => {
    switch (action.type) {

        case c.FORM_UPDATE_VALUE:
            return assign({}, state, {
                values: assign({}, state.values, {
                    [action.name]: action.value
                })
            });

        case c.FORM_RESET:
            return initialState;

        default:
            return state;
    }
}