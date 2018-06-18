import { call, put } from 'redux-saga/effects';

import * as catActions from 'actions/cat.action';
import catApi from 'services/cat.api';

function * getAllCat() {
  try {
    const response = yield call(catApi.getAll);
    const cats = response.data.images;
    yield put(catActions.getCatSuccess({ cats }));
  } catch (e) {
    yield put(catActions.getCatFailure({ error: e.message }));
  }
}

export { getAllCat }
