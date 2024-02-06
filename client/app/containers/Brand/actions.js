/*
 *
 * Brand actions
 *
 */

import { goBack } from 'connected-react-router';
import { success } from 'react-notification-system-redux';
import axios from 'axios';

import { FETCH_STORE_BRANDS } from './constants';

import handleError from '../../utils/error';

// fetch store brands api
export const fetchStoreBrands = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${API_URL}/brand/list`);

      dispatch({
        type: FETCH_STORE_BRANDS,
        payload: response.data.brands
      });
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};
