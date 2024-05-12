/**
 *
 * actions.js
 * actions configuration
 */

import { bindActionCreators } from 'redux';

import * as authentication from './containers/Authentication/actions';
import * as category from './containers/Category/actions';
import * as navigation from './containers/Navigation/actions';
import * as brand from './containers/Brand/actions';
import * as account from './containers/Account/actions';
import * as newsletter from './containers/Newsletter/actions';
import * as menu from './containers/NavigationMenu/actions';
import * as login from './containers/Login/actions';
import * as signup from './containers/Signup/actions';
import * as contact from './containers/Contact/actions';
import * as merchant from './containers/Merchant/actions';

export default function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...authentication,
      ...category,
      ...navigation,
      ...brand,
      ...account,
      ...newsletter,
      ...menu,
      ...login,
      ...signup,
      ...contact,
      ...merchant
    },
    dispatch
  );
}
