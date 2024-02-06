/*
 *
 * Authentication actions
 *
 */

import { CLEAR_AUTH } from './constants';

export const clearAuth = () => {
  return {
    type: CLEAR_AUTH
  };
};
