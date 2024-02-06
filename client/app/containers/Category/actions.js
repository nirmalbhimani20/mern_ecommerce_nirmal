/*
 *
 * Category actions
 *
 */

import { goBack } from 'connected-react-router';
import { success } from 'react-notification-system-redux';
import axios from 'axios';

import handleError from '../../utils/error';

import {
  FETCH_CATEGORIES,
  SET_CATEGORIES_LOADING,
  FETCH_STORE_CATEGORIES
} from './constants';

import { API_URL } from '../../constants';

// fetch categories api
export const fetchCategories = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: SET_CATEGORIES_LOADING, payload: true });
      const responce = await axios.get(`${API_URL}/category`);

      dispatch({ type: FETCH_CATEGORIES, payload: responce.data.categories });
    } catch (error) {
    } finally {
      dispatch({ type: SET_CATEGORIES_LOADING, payload: false });
    }
  };
};

// fetch store categories api
export const fetchStoreCategories = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${API_URL}/category/list`);

      dispatch({
        type: FETCH_STORE_CATEGORIES,
        payload: response.data.categories
      });
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};
