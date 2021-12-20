import React from 'react';
import { connect } from 'react-redux';
import { checkout } from '../actions/postAction';
function Cart({ shoppingCart, totalPrice, checkout }) {
  const handleClick = () => {
    checkout();
  };
  return (
    <div>
      Cart
      {shoppingCart.map((product) => {
        return (
          <div key={product.id} className='product-div'>
            <div>
              {product.name} - ${product.price} x{product.quantity}
            </div>
          </div>
        );
      })}
      <p>Total ${totalPrice}</p>
      <button type='button' onClick={() => handleClick()}>
        Checkout
      </button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { shoppingCart: state.shoppingCart, totalPrice: state.totalPrice };
};
const mapDispatchToProps = (dispatch) => {
  return {
    checkout: () => {
      dispatch(checkout());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
