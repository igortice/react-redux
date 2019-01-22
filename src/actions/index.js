import { ADD_NEW_ARTICLE, REMOVE_ARTICLE } from './actionTypes';

export const clickButtonAddNewArticle = (articles) => ({
  type: ADD_NEW_ARTICLE,
  articles: articles
});

export const clickButtonRemoveArticle = (articles) => ({
  type: REMOVE_ARTICLE,
  articles: articles
});
