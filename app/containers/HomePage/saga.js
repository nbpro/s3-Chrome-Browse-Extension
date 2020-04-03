/**
 * Gets the repositories of the user from Github
 */

import {
  call, put, select, takeLatest
} from 'redux-saga/effects';
import { } from 'containers/App/constants';

import request from 'utils/request';
import { LOAD_APP_DATA } from '../App/constants';
import { applicationLoaded } from '../App/actions';

export function* getState() {
  yield put(applicationLoaded(true));
}
export default function* getApplicationState() {
  yield takeLatest(LOAD_APP_DATA, getState);
}
