/*
 *
 * Authentication reducer
 *
 */

import { CLEAR_AUTH } from './constants';

const initialState = {
  authenticated: false,
  isLoading: false
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_AUTH:
      return {
        ...state,
        authenticated: false
      };
    default:
      return state;
  }
};

export default authenticationReducer;
