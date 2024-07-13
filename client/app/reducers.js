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
import brandReducer from './containers/Brand/reducer';
import newsletterReducer from './containers/Newsletter/reducer';
import navigationMenuReducer from './containers/NavigationMenu/reducer';
import loginReducer from './containers/Login/reducer';
import signupReducer from './containers/Signup/reducer';
import contactReducer from './containers/Contact/reducer';
import merchantReducer from './containers/Merchant/reducer';
import dashboardReducer from './containers/Dashboard/reducer';
import productReducer from './containers/Product/reducer';

const createReducer = history =>
  combineReducers({
    router: connectRouter(history),
    notifications,
    authentication: authenticationReducer,
    account: accountReducer,
    category: categoryReducer,
    navigation: navigationReducer,
    cart: cartReducer,
    brand: brandReducer,
    newsletter: newsletterReducer,
    menu: navigationMenuReducer,
    login: loginReducer,
    signup: signupReducer,
    contact: contactReducer,
    merchant: merchantReducer,
    dashboard: dashboardReducer,
    product: productReducer
  });

export default createReducer;
