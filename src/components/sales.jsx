import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/postAction';
function Sales({ products, addToCart }) {
  console.log(addToCart);
  const handleClick = (id) => {
    addToCart(id);
  };
  return (
    <div>
      <p>sales</p>
      {products.map((product) => {
        return (
          <div key={product.id} className='product-div'>
            <div>
              {product.name} - ${product.price} x{product.quantity}
            </div>
            <button
              type='button'
              onClick={() => handleClick(product.id)}
              disabled={product.quantity === 0 ? true : false}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
const mapStateToProps = (state) => {
  return { products: state.products };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sales);
