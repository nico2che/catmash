import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import { createLogger } from 'redux-logger';

import reducers from './reducers';
import sagas from './sagas';
import Router from './router';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const persistConfig = {
  key: 'root',
  storage,
};

if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger({
    collapsed: true,
  }));
}

const store = createStore(
  persistReducer(persistConfig, reducers),
  applyMiddleware(...middlewares),
);

sagaMiddleware.run(sagas);

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
