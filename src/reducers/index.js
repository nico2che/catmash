import { combineReducers } from 'redux';

import catReducer from './cat.reducer';
import scoreReducer from './score.reducer';

const reducers = combineReducers({
    cat: catReducer,
    score: scoreReducer,
});

export default reducers;
