import { ADD_NEW_ARTICLE, REMOVE_ARTICLE } from '../actions/actionTypes';

const INITIAL_STATE = {
  articles: [
    { title: 'React Redux Tutorial for Beginners', id: Date.now() },
    {
      title: 'Redux e React: Redux e come con React',
      id: Date.now() + 1
    }
  ]
};

export const articlesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NEW_ARTICLE:
      return {
        ...state,
        articles: action.articles
      };
    case REMOVE_ARTICLE:
      return {
        ...state,
        articles: action.articles
      };
    default:
      return state;
  }
};
