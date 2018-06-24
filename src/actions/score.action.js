export const GET_SCORE = 'GET_SCORE';
export const GET_SCORE_SUCCESS = 'GET_SCORE_SUCCESS';
export const GET_SCORE_FAILURE = 'GET_SCORE_FAILURE';
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const UPDATE_SCORE_SUCCESS = 'UPDATE_SCORE_SUCCESS';
export const UPDATE_SCORE_FAILURE = 'UPDATE_SCORE_FAILURE';

export function getScore() {
  return {
    type: GET_SCORE,
  };
}

export function getScoreSuccess({ scores }) {
  return {
    type: GET_SCORE_SUCCESS,
    scores,
  };
}

export function getScoreFailure({ error }) {
  return {
    type: GET_SCORE_FAILURE,
    error,
  };
}

export function updateScore({ catWinner, catLoser }) {
  return {
    type: UPDATE_SCORE,
    catWinner,
    catLoser,
  };
}

export function updateScoreSuccess({ catWinner, catLoser }) {
  return {
    type: UPDATE_SCORE_SUCCESS,
    catWinner,
    catLoser,
  };
}

export function updateScoreFailure({ error }) {
  return {
    type: UPDATE_SCORE_FAILURE,
    error,
  };
}
