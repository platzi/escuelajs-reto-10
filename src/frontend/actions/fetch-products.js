import {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError,
} from './index';

function fetchProducts() {
  return (dispatch) => {
    dispatch(fetchProductsPending());
    fetch('https://escuelajs-reto-09.wilsonromero.now.sh/api/products')
      .then(res => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchProductsSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchProductsError(error));
      });
  };
}

export default fetchProducts;
