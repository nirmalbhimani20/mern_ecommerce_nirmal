/*
 *
 * Navigation actions
 *
 */

import axios from 'axios';
import handleError from '../../utils/error';
import {
  TOGGLE_MENU,
  SUGGESTIONS_FETCH_REQUEST,
  SUGGESTIONS_CLEAR_REQUEST,
  SEARCH_CHANGE,
  TOGGLE_CART
} from './constants';
import { API_URL } from '../../constants';

export const toggleMenu = () => {
  return {
    type: TOGGLE_MENU
  };
};

export const onSuggestionsFetchRequested = value => {
  const inputValue = value.value.trim().toLowerCase();

  return async (dispatch, getState) => {
    try {
      if (inputValue && inputValue.length % 3 === 0) {
        const response = await axios.get(
          `${API_URL}/product/list/search/${inputValue}`
        );
        dispatch({
          type: SUGGESTIONS_FETCH_REQUEST,
          payload: response.data.products
        });
      }
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};

export const onSuggestionsClearRequested = () => {
  return {
    type: SUGGESTIONS_CLEAR_REQUEST,
    payload: []
  };
};

export const onSearch = v => {
  return {
    type: SEARCH_CHANGE,
    payload: v
  };
};

export const toggleCart = () => {
  return {
    type: TOGGLE_CART
  };
};
