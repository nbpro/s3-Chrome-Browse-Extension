import * as c from './constant.jsx';

export function update(name, value) {
    return dispatch => dispatch({
        type: c.FORM_UPDATE_VALUE,
        name, value
    });
}

export function reset() {
    return dispatch => dispatch({
        type: c.FORM_RESET
    });
}