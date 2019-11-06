const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'UPDATE_PRODUCTS_LIST':
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
