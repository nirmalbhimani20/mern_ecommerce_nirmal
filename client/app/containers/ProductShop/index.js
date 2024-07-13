/**
 *
 * ProductsShop
 *
 */

import React from 'react';

import { connect } from 'react-redux';

import actions from '../../actions';

class productShop extends React.PureComponent {
  componentDidMount() {}

  render() {
    <div>hello</div>;
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, actions)(ProductsShop);
