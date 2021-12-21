const initalState = {
  products: [
    { id: 1, name: 'iPad 4 Mini', price: 500.01, quantity: 2 },
    { id: 2, name: 'T- shirt', price: 10.99, quantity: 10 },
    { id: 3, name: 'Chatli XCX CD', price: 19.99, quantity: 5 },
  ],
  totalPrice: 0,
  shoppingCart: [],
};
const rootReducer = (state = initalState, { type, id }) => {
  console.log(type);
  switch (type) {
    case 'addToCart':
      const clickedProduct = findIfExist(state.products, id);
      state.totalPrice += clickedProduct.price;
      clickedProduct.quantity -= 1;
      const productToCart = findIfExist(state.shoppingCart, id);
      if (productToCart) {
        productToCart.quantity += 1;
      } else {
        const newProductToCart = Object.assign({}, clickedProduct);
        newProductToCart.quantity = 1;
        state.shoppingCart.push(newProductToCart);
      }
      return { ...state, products: [...state.products], shoppingCart: [...state.shoppingCart] };

    case 'CHECKOUT':
      return { ...state, totalPrice: 0, shoppingCart: [] };
    default:
      return state;
  }
};

const findIfExist = (arr, id) => {
  return arr.find((product) => product.id === id);
};

export default rootReducer;
