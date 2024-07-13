/*
 *
 * Account reducer
 *
 */

import {
  ACCOUNT_CHANGE,
  FETCH_PROFILE,
  CLEAR_ACCOUNT,
  SET_PROFILE_LOADING
} from './constants';

const initialState = {
  user: {
    firstName: '',
    lastName: '',
    provider: '',
    role: ''
  },
  isLoading: false
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_ACCOUNT:
      return {
        ...state,
        firstName: '',
        lastName: ''
      };
    case FETCH_PROFILE:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload
        }
      };
    case CLEAR_ACCOUNT:
      return {
        ...state,
        user: {
          firstName: '',
          lastName: ''
        }
      };
    case SET_PROFILE_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
};

export default accountReducer;
