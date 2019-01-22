import { articlesReducer } from './articlesReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  articlesReducer: articlesReducer
});
