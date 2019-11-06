const addToCart = (payload) => ({
  type: 'ADD_TO_CART',
  payload,
});

const updateProductsList = (payload) => ({
  type: 'UPDATE_PRODUCTS_LIST',
  payload,
});

export { addToCart, updateProductsList };
