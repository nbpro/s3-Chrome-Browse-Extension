import { LOAD_HOME_PAGE } from './constants';

export function loadHomePage(payload) {
  return {
    type: LOAD_HOME_PAGE,
    payload
  };
}
