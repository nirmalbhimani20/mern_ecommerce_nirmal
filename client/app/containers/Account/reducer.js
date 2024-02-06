/*
 *
 * Account reducer
 *
 */

import { CLEAR_ACCOUNT } from './constants';

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
    default:
      return state;
  }
};

export default accountReducer;
