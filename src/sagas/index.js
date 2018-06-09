import { all, takeLatest } from 'redux-saga/effects';

import * as catActions from 'actions/cat.action';

import { getAllCat } from './cat.saga'

function * sagas() {
  yield all([
    takeLatest(catActions.GET_CAT, getAllCat),
  ]);
}

export default sagas;