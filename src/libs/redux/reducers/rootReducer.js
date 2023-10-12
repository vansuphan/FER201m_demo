import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { messagerReducer } from './messagerReducer';
import { reducer as formReducer } from 'redux-form';

export const rootReducer = combineReducers({
  counterReducer,
  messagerReducer,
  form: formReducer
});