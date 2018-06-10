import { put } from 'redux-saga/effects';

import * as scoreActions from 'actions/score.action';

function * updateScore(action) {
  try {
    yield put(scoreActions.updateScoreSuccess(action));
  } catch (e) {
    yield put(scoreActions.updateScoreFailure({ error: e.message }));
  }
}

export { updateScore }
