const initialState = {
  pending: false,
  products: [],
  cart: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'FETCH_PRODUCTS_PENDING':
      return { ...state, pending: true };
    case 'FETCH_PRODUCTS_SUCCESS':
      return { ...state, pending: false, products: action.payload };
    case 'FETCH_PRODUCTS_ERROR':
      return { ...state, pending: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
