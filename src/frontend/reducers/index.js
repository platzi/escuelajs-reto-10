const initialState = {
  products: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'SET_PRODUCTS': {
      if (action.error) {
        return;
      }
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
