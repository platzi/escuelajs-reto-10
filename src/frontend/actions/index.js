export const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});

export const fetchProductsPending = payload => ({
  type: 'FETCH_PRODUCTS_PENDING',
});

export const fetchProductsSuccess = payload => ({
  type: 'FETCH_PRODUCTS_SUCCESS',
  payload,
});

export const fetchProductsError = payload => ({
  type: 'FETCH_PRODUCTS_ERROR',
  payload,
});
