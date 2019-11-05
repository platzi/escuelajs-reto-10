import axios from 'axios';

const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});

const setProducts = payload => ({
  type: 'SET_PRODUCTS',
  payload,
});

const getProductsRequest = payload => (dispatch) => {
  axios
    .get('/server/products')
    .then(({ data }) => {
      const products = data.data;
      dispatch(setProducts({ products }));
    })
    .catch(error => console.log(error));
};

export { addToCart, getProductsRequest };
