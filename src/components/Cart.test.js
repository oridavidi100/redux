import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
// import Cart from './Cart';
import Sales from './Sales';
import { createStore } from 'redux';
import rootReducer from '../reducer/rootReducer';
const store = createStore(rootReducer);
const products = [
  { id: 1, name: 'iPad 4 Mini', price: 500.01, quantity: 2 },
  { id: 2, name: 'T- shirt', price: 10.99, quantity: 10 },
  { id: 3, name: 'Chatli XCX CD', price: 19.99, quantity: 5 },
];
test('renders content', () => {
  // const Cartcomponent = render(<Cart />);
  const Salescomponent = render(<Sales store={store} />);
  const productList = Salescomponent.container.querySelector('.productList');
  console.log(productList);
  expect(productList).toBe(
    products.map((product) => {
      return (
        <div key={product.id} className='product-div'>
          <div>
            {product.name} - ${product.price} x{product.quantity}
          </div>
          <button>Add to Cart</button>
        </div>
      );
    })
  );
});
