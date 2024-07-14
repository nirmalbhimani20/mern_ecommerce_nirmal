/*
 *
 * Product reducer
 *
 */

import {
  FETCH_STORE_PRODUCTS,
  SET_ADVANCED_FILTERS,
  SET_PRODUCTS_LOADING,
  RESET_ADVANCED_FILTERS
} from './constants';

const initialState = {
  products: [],
  storeProducts: [],
  product: {
    _id: ''
  },
  isLoading: false,
  advancedFilters: {
    name: 'all',
    category: 'all',
    bnrad: 'all',
    min: 1,
    max: 2500,
    rating: 0,
    order: 0,
    totalPages: 1,
    currentPage: 1,
    count: 0,
    limit: 10
  }
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STORE_PRODUCTS:
      return {
        ...state,
        storeProducts: action.payload
      };
    case SET_PRODUCTS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case SET_ADVANCED_FILTERS:
      return {
        ...state,
        advancedFilters: {
          ...state.advancedFilters,
          ...action.payload
        }
      };
    case RESET_ADVANCED_FILTERS: {
      return {
        ...state,
        advancedFilters: {
          name: 'all',
          category: 'all',
          brand: 'all',
          min: 1,
          max: 2500,
          rating: 0,
          prder: 0,
          totalPages: 1,
          currentpage: 1,
          count: 0,
          limit: 10
        }
      };
    }
    default:
      return state;
  }
};

export default productReducer;
