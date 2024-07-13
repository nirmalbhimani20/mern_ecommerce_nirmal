/**
 *
 * Shop
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import actions from '../../actions';

import BrandsShop from '../BrandsShop';

import ProductFilter from '../../components/Store/ProductFilter';
import Page404 from '../../components/Common/Page404';
// import ProductsShop from '../ProductsShop';

class Shop extends React.PureComponent {
  componentDidMount() {}

  render() {
    const { products, advancedFilters, filterProducts } = this.props;
    const { totalPages, currentPage, count, limit, order } = advancedFilters;

    const displayPagination = totalPages > 1;
    const totalProducts = products.length;
    const left = limit * (currentPage - 1) + 1;
    const right = totalProducts + left - 1;

    return (
      <div className='shop'>
        <Row xs='12'>
          <Col
            xs={{ size: 12, order: 1 }}
            sm={{ size: 12, order: 1 }}
            md={{ size: 12, order: 1 }}
            lg={{ size: 3, order: 1 }}
          >
            {/* <ProductFilter filterProducts={filterProducts} /> */}
          </Col>
          <Col
            xs={{ size: 12, order: 2 }}
            sm={{ size: 12, order: 2 }}
            md={{ size: 12, order: 2 }}
            lg={{ size: 9, order: 2 }}
          >
            <Row className='align-items-center mx-0 mb-4 mt-4 mt-lg-0 py-3 py-lg-0 bg-white shop-toolbar'>
              <Col
                xs={{ size: 12, order: 1 }}
                sm={{ size: 12, order: 1 }}
                md={{ size: 5, order: 1 }}
                lg={{ size: 6, order: 1 }}
                className='text-center text-md-left mt-3 mt-md-0 mb-1 mb-md-0'
              >
                <span>Showing:</span>
                {totalProducts > 0
                  ? `${left} - ${right} products of ${count} products`
                  : `${count} prodcuts`}
              </Col>
            </Row>
            <Switch>
              {/* <Route exact path='/shop' component={ProductsShop}></Route> */}
              <Route path='/shop/brand/:slug' component={BrandsShop} />
              <Route path='*' component={Page404} />
            </Switch>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    advancedFilters: state.product.advancedFilters,
    products: state.product.storeProducts
  };
};

export default connect(mapStateToProps, actions)(Shop);
