import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers/AppReducer';
import setupSocket from './helpers/ServerHelper';
import rootSaga  from './sagas';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['navigation', 'game']
};

//Add sagaMiddleware, add persistor and create store
const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

const socket = setupSocket(store.dispatch);
sagaMiddleware.run(rootSaga, { socket });
export const persistor = persistStore(store);