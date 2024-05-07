/*
 *
 * Navigation reducer
 *
 */

import {
  TOGGLE_MENU,
  SUGGESTIONS_FETCH_REQUEST,
  SUGGESTIONS_CLEAR_REQUEST,
  SEARCH_CHANGE,
  TOGGLE_CART,
  TOGGLE_BRAND
} from './constants';

const initialState = {
  isMenuOpen: false,
  isCartOpen: false,
  isBrandOpen: false,
  searchValue: '',
  searchSuggestions: []
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen
      };
    case SUGGESTIONS_FETCH_REQUEST:
      return {
        ...state,
        searchSuggestions: action.payload
      };
    case SUGGESTIONS_CLEAR_REQUEST:
      return {
        ...state,
        searchSuggestions: action.payload
      };
    case SEARCH_CHANGE:
      return {
        ...state,
        searchValue: action.payload
      };
    case TOGGLE_CART:
      return {
        ...state,
        isCartOpen: !state.isCartOpen
      };
    case TOGGLE_BRAND:
      return {
        ...state,
        isBrandOpen: !state.isBrandOpen
      };
    default:
      return state;
  }
};

export default navigationReducer;
