import * as catActions from 'actions/cat.action';

const initialState = {
  cats: [],
  loading: false,
  error: null,
}

const catReducer = function(state = initialState, action) {
  switch(action.type) {
    case catActions.GET_CAT:
      return {
        ...state,
        loading: true,
      };
    case catActions.GET_CAT_SUCCESS:
      const { cats } = action;
      return {
        ...state,
        loading: false,
        cats,
      };
    case catActions.GET_CAT_FAILURE:
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

export default catReducer;
