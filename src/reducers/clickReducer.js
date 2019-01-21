import { CLICK_BUTTON_ADD_NEW } from '../actions/actionTypes';

const initialState = {
  articles: []
};

export const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_BUTTON_ADD_NEW:
      return {
        ...state,
        articles: action.newValue
      };
    default:
      return state;
  }
};
