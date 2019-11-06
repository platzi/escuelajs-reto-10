/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import * as actions from '../actions/actionTypes';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case actions.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((prod, index) => index !== action.payload),
      };

    case actions.REFRESH_TOTAL:
      return {
        ...state,
        total: state.cart.reduce((total, { price }) => (total += price), 0),
      };
    default:
      return state;
  }
};

export default reducer;
