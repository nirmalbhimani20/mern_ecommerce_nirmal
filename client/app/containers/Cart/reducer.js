/*
 *
 * Cart reducer
 *
 */

const initialState = {
  cartItems: [],
  cartTotal: 0,
  cartId: ''
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default cartReducer;
