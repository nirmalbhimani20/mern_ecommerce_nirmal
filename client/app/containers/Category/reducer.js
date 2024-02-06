import {
  FETCH_CATEGORIES,
  SET_CATEGORIES_LOADING,
  FETCH_STORE_CATEGORIES
} from './constants';

const initialState = {
  categories: [],
  storeCategories: [],
  category: {
    _id: ''
  },
  isLoading: false
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    case FETCH_STORE_CATEGORIES:
      return {
        ...state,
        storeCategories: action.payload
      };
    case SET_CATEGORIES_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
};

export default categoryReducer;
