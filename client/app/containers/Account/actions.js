/*
 *
 * Account actions
 *
 */

import { success } from 'react-notification-system-redux';
import axios from 'axios';

import { CLEAR_ACCOUNT } from './constants';
import handleError from '../../utils/error';
import { API_URL } from '../../constants';

export const setProfileLoading = value => {
  return {
    type: SET_PROFILE_LOADING,
    payload: value
  };
};
