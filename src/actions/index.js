import { ADD_NEW_ARTICLE, REMOVE_ARTICLE } from './actionTypes';

export const clickButtonAddNewArticle = (texto) => ({
  type: ADD_NEW_ARTICLE,
  payload: texto
});

export const clickButtonRemoveArticle = (id) => ({
  type: REMOVE_ARTICLE,
  payload: id
});
