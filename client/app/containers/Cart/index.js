/*
 *
 * Cart
 *
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';

import { BagIcon, CloseIcon } from '../../components/Common/Icon';
import Button from '../../components/Common/Button';

export class Cart extends Component {
  render() {
    const { isCartOpen, toggleCart, cartItems, cartTotal } = this.props;

    return (
      <div className='cart'>
        <div className='cart-header'>
          {isCartOpen && (
            <Button
              borderless
              variant='empty'
              ariaLabel='close the cart'
              icon={<CloseIcon />}
              onClick={toggleCart}
            />
          )}
        </div>
        {cartItems.length > 0 ? (
          <div className='cart-body'>
            <CartList
              toggleCart={toggleCart}
              cartItems={cartItems}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          </div>
        ) : (
          <div className='empty-cart'>
            <BagIcon />
            <p>Your shopping cart is empty</p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isCartOpen: state.navigation.isCartOpen,
    authenticated: state.authentication.authenticated,
    cartItems: state.cart.cartItems,
    cartTotal: state.cart.cartTotal
  };
};

export default connect(mapStateToProps, actions)(Cart);
