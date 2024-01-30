/**
 *
 * actions.js
 * actions configuration
 */

import { bindActionCreators } from 'redux';

export default function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}
