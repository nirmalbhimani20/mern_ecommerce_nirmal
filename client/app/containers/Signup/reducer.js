/*
 *
 * Signup reducer
 *
 */

import {
  SIGNUP_CHANGE,
  SIGNUP_RESET,
  SET_SIGNUP_LOADING,
  SET_SIGNUP_SUBMITTING,
  SUBSCRIBE_CHANGE,
  SET_SIGNUP_FORM_ERRORS
} from './constants';

const initialState = {
  signupFormData: {
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  },
  formErrors: {},
  isSubmitting: false,
  isLoading: false,
  isSubscribed: false
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_CHANGE:
      return {
        ...state,
        signupFormData: { ...signupFormData, ...action.payload }
      };
    case SUBSCRIBE_CHANGE:
      return {
        ...state,
        isSubscribed: !state.isSubscribed
      };
    case SET_SIGNUP_FORM_ERRORS:
      return {
        ...state,
        formErrros: action.payload
      };
    case SET_SIGNUP_LOADING:
      return {
        ...state,
        isSubmitting: action.payload
      };
    case SIGNUP_RESET:
      return {
        ...state,
        signupFormData: {
          email: '',
          firstName: '',
          lastname: '',
          password: ''
        },
        formErrors: {},
        isLoading: false
      };
    default:
      return state;
  }
};

export default signupReducer;
