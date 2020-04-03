import { LOAD_APP_DATA, LOAD_APP_DATA_FAIL, LOAD_APP_DATA_SUCCESS } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_APP_DATA: {
      const newState = {
        ...state,
        loading: true,
        error: false,
      };

      return newState;
    }
    case LOAD_APP_DATA_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
      };
      return newState;
    }

    case LOAD_APP_DATA_FAIL: {
      return { ...state, error: action.error, loading: false };
    }
    default:
      return state;
  }
}

export default appReducer;
