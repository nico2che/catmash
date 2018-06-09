import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import sagas from './sagas';
import Router from './router';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
