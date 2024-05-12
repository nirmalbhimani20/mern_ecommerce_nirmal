/*
 *
 * Authentication actions
 *
 */

import { SET_AUTH, CLEAR_AUTH } from './constants';

export const clearAuth = () => {
  return {
    type: CLEAR_AUTH
  };
};

export const setAuth = () => {
  return {
    type: SET_AUTH
  };
};
