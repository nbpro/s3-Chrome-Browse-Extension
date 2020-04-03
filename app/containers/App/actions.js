/***
 * All the app actions
 */
import {
  LOAD_APP_DATA,
  LOAD_APP_DATA_SUCCESS,
  LOAD_APP_DATA_FAIL,
} from './constants';

export function loadApplication() {
  return {
    type: LOAD_APP_DATA,
  };
}
export function applicationLoaded(payload) {
  return {
    type: LOAD_APP_DATA_SUCCESS,
    payload
  };
}
export function applicationLoadingError(error) {
  return {
    type: LOAD_APP_DATA_FAIL,
    error,
  };
}
