/*
 *
 * Brand reducer
 *
 */

import { FETCH_STORE_BRANDS } from './constants';

const initialState = {
  storeBrands: []
};

const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STORE_BRANDS:
      return {
        ...state,
        storeBrands: action.payload
      };
    default:
      return state;
  }
};

export default brandReducer;
