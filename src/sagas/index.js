import { all, takeLatest } from 'redux-saga/effects';

import * as catActions from 'actions/cat.action';
import * as scoreActions from 'actions/score.action';

import { getAllCat } from './cat.saga';
import { updateScore } from './score.saga';

function * sagas() {
  yield all([
    takeLatest(catActions.GET_CAT, getAllCat),
    takeLatest(scoreActions.UPDATE_SCORE, updateScore),
  ]);
}

export default sagas;