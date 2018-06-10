import * as scoreActions from 'actions/score.action';

const initialState = {
  scores: {},
  loading: false,
  error: null,
}

const scoreReducer = function(state = initialState, action) {
  switch(action.type) {
    case scoreActions.UPDATE_SCORE:
      return {
        ...state,
        loading: true,
      };
    case scoreActions.UPDATE_SCORE_SUCCESS:
      const { catWinner, catLoser } = action;
      return {
        ...state,
        loading: false,
        scores: {
          ...state.scores,
          [catWinner.id]: { score: catWinner.score, count: catWinner.count },
          [catLoser.id]: { score: catLoser.score, count: catLoser.count },
        },
      };
    case scoreActions.UPDATE_SCORE_FAILURE:
    const { error } = action;
      return {
        ...state,
        loading: false,
        error,
      };
    default:
      return state;
  }
}

export default scoreReducer;
