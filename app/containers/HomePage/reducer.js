import { LOAD_HOME_PAGE } from './constants';

// The initial state of the App
const initialState = {
  username: '',
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_HOME_PAGE:
      return { ...state, ...action };
    default:
      return state;
  }
}

export default homeReducer;
