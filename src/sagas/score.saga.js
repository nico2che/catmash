import { put } from 'redux-saga/effects';

import firebase from '../firebase';

import * as scoreActions from 'actions/score.action';

function * updateScore({ catWinner, catLoser }) {
  try {
    const payload = {}
    payload[catWinner.id] = { score: catWinner.score, count: catWinner.count };
    payload[catLoser.id] = { score: catLoser.score, count: catLoser.count };
    firebase.database().ref('/cats/').update(payload);
    yield put(scoreActions.updateScoreSuccess({ catWinner, catLoser }));
  } catch (e) {
    yield put(scoreActions.updateScoreFailure({ error: e.message }));
  }
}

export { updateScore }
