/*
 *
 * reducers.js
 * reducers configuration
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as notifications } from 'react-notification-system-redux';

import authenticationReducer from './containers/Authentication/reducer';
import accountReducer from './containers/Account/reducer';
import categoryReducer from './containers/Category/reducer';
import navigationReducer from './containers/Navigation/reducer';
import cartReducer from './containers/Cart/reducer';

const createReducer = history =>
  combineReducers({
    router: connectRouter(history),
    notifications,
    authentication: authenticationReducer,
    account: accountReducer,
    category: categoryReducer,
    navigation: navigationReducer,
    cart: cartReducer
  });

export default createReducer;
