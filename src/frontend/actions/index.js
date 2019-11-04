const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload: {
    ...payload,
    cartId: new Date().getTime(),
  },
});

const removeFromCart = payload => ({
  type: 'REMOVE_FROM_CART',
  payload,
});

export { addToCart, removeFromCart };
