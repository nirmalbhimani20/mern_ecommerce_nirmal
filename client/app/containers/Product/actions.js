/*
 *
 * Product actions
 *
 */

import { goBack } from 'connected-react-router';
import { success } from 'react-notification-system-redux';
import axios from 'axios';

import {
  FETCH_STORE_PRODUCTS,
  SET_PRODUCTS_LOADING,
  SET_ADVANCED_FILTERS,
  RESET_ADVANCED_FILTERS
} from './constants';
import handleError from '../../utils/error';
import { API_URL } from '../../constants';

export const setProductLoading = value => {
  return {
    type: SET_PRODUCTS_LOADING,
    payload: value
  };
};

export const fetchBrandProducts = slug => {
  return async (dispatch, getState) => {
    try {
      dispatch(setProductLoading(true));

      const response = await axios.get(`${API_URL}/product/list/brand/${slug}`);

      const s = getState().product.advancedFilters;

      dispatch({
        type: SET_ADVANCED_FILTERS,
        payload: Object.assign(s, {
          pages: response.data.pages,
          pageNumber: response.data.page,
          totalProducts: response.data.totalProducts
        })
      });

      dispatch({
        type: FETCH_STORE_PRODUCTS,
        payload: response.data.products
      });
    } catch (error) {
      handleError(error, dispatch);
    } finally {
      dispatch(setProductLoading(false));
    }
  };
};

export const filterProducts = (n, v) => {
  return async (dispatch, getState) => {
    try {
      n ?? dispatch({ type: RESET_ADVANCED_FILTERS });

      dispatch(setProductLoading(true));
      const advancedFilters = getState().product.advancedFilters;
      let payload = productsFilterOrganizer(n, v, advancedFilters);
      dispatch({ type: SET_ADVANCED_FILTERS, payload });
      const sortOrder = getSortOrder(payload.order);
      payload = { ...payload, sortOrder };

      const response = await axios.get(`${API_URL}/product/list`, {
        params: {
          ...payload
        }
      });

      const { products, totalPages, currentPage, count } = response.data;

      dispatch({ type: FETCH_STORE_PRODUCTS, payload: products });

      const newPayload = {
        ...payload,
        totalPages,
        currentPage,
        count
      };

      dispatch({ type: SET_ADVANCED_FILTERS, payload: newPayload });
    } catch (error) {
      handleError(error);
    } finally {
      dispatch(setProductLoading(false));
    }
  };
};

const productsFilterOrganizer = (n, v, s) => {
  switch (n) {
    case 'category':
      return {
        name: s.name,
        category: v,
        brand: s.brand,
        min: s.min,
        max: s.max,
        rating: s.rating,
        order: s.order,
        page: s.currentPage,
        limit: s.limit
      };
    case 'brand':
      return {
        name: s.name,
        category: s.category,
        brand: v,
        min: s.min,
        max: s.max,
        rating: s.rating,
        order: s.order,
        page: s.currentPage,
        limit: s.limit
      };
    case 'sorting':
      return {
        name: s.name,
        category: s.category,
        brand: s.brand,
        min: s.min,
        max: s.max,
        rating: s.rating,
        order: v,
        page: s.currentPage,
        limit: s.limit
      };
    case 'price':
      return {
        name: s.name,
        category: s.category,
        brand: s.brand,
        min: v[0],
        max: v[1],
        rating: s.rating,
        order: s.order,
        page: s.currentPage,
        limit: s.limit
      };
    case 'rating':
      return {
        name: s.name,
        category: s.category,
        brand: s.brand,
        min: s.min,
        max: s.max,
        rating: v,
        order: s.order,
        page: s.currentPage,
        limit: s.limit
      };
    case 'pagination':
      return {
        name: s.name,
        category: s.category,
        brand: s.brand,
        min: s.min,
        max: s.max,
        rating: s.rating,
        order: s.order,
        page: v ?? s.currentPage,
        limit: s.limit
      };
    default:
      return {
        name: s.name,
        category: s.category,
        brand: s.brand,
        min: s.min,
        max: s.max,
        rating: s.rating,
        order: s.order,
        page: s.currentPage,
        limit: s.limit
      };
  }
};

const getSortOrder = value => {
  let sortOrder = {};
  switch (value) {
    case 0:
      sortOrder._id = -1;
      break;
    case 1:
      sortOrder.price = -1;
      break;
    case 2:
      sortOrder.price = 1;
      break;

    default:
      break;
  }
  return sortOrder;
};
