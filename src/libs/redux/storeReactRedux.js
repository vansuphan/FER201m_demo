import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger({ collapsed: true });

export const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);