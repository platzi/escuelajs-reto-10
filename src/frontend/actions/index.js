import axios from 'axios';

const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});

const setProducts = payload => ({
  type: 'SET_PRODUCTS',
  payload,
});

const setProductsError = payload => ({
  type: 'SET_PRODUCTS',
  payload,
  error: true,
});

const getProductsRequest = payload => (dispatch) => {
  axios
    .get('/server/products')
    .then(({ data: products }) => dispatch(setProducts({ products })))
    .catch(error => dispatch(setProductsError(error)));
};

export { addToCart, getProductsRequest };
