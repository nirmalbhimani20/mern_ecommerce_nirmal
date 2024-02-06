/**
 *
 * actions.js
 * actions configuration
 */

import { bindActionCreators } from 'redux';

import * as authentication from './containers/Authentication/actions';
import * as category from './containers/Category/actions';
import * as navigation from './containers/Navigation/actions';

export default function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { ...authentication, ...category, ...navigation },
    dispatch
  );
}
