export const checkout = () => {
  return { type: 'CHECKOUT' };
};

export const addToCart = (id) => {
  return { type: 'addToCart', id };
};
