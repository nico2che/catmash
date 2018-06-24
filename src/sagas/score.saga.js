import { put } from 'redux-saga/effects';

import * as scoreActions from 'actions/score.action';
import firebase from '../firebase';

function* getAllScore() {
  try {
    const scores = yield firebase.database().ref('/cats').once('value');
    yield put(scoreActions.getScoreSuccess({ scores: scores.val() }));
  } catch (e) {
    yield put(scoreActions.getScoreFailure({ error: e.message }));
  }
}

function* updateScore({ catWinner, catLoser }) {
  try {
    const payload = {};
    payload[catWinner.id] = { score: catWinner.score, count: catWinner.count };
    payload[catLoser.id] = { ...catLoser, score: catLoser.score };
    firebase.database().ref('/cats/').update(payload);
    yield put(scoreActions.updateScoreSuccess({ catWinner, catLoser }));
  } catch (e) {
    yield put(scoreActions.updateScoreFailure({ error: e.message }));
  }
}

export { getAllScore, updateScore };
