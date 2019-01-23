import { combineReducers } from 'redux';

import { articlesReducer } from './articlesReducer';

export const Reducers = combineReducers({
  articlesReducer: articlesReducer
});
