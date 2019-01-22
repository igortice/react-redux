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
        articles: state.articles.concat({
          title: action.payload,
          id: Date.now()
        })
      };
    case REMOVE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter((item) => item.id !== action.payload)
      };
    default:
      return state;
  }
};
