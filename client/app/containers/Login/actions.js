/*
 *
 * Login actions
 *
 */

import { success } from 'react-notification-system-redux';
import axios from 'axios';
import { push } from 'connected-react-router';

import { clearAuth } from '../Authentication/actions';
import { clearAccount } from '../Account/actions';

export const signOut = () => {
  return (dispatch, getState) => {
    const successfulOptions = {
      title: `You have signed out!`,
      position: 'tr',
      autoDismiss: 1
    };

    dispatch(clearAuth());
    dispatch(clearAccount());
    dispatch(push('/login'));

    localStorage.removeItem('token');

    dispatch(success(successfulOptions));
    // dispatch(clearCart());
  };
};
