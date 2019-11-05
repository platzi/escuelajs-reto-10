const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'SET_PRODUCTS': {
      return {
        ...state,
        products: action.payload.products,
      };
    }
    default:
      return state;
  }
};

export default reducer;
