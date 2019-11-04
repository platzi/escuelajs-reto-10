import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import axios from 'axios';
import App from './routes/App';
import reducer from './reducers';

const initialState = {
  cart: [],
  products: [],
};

axios.get(`${process.env.API_URL}/products`).then((res) => {
  initialState.products = res.data || [];
});

const store = createStore(reducer, initialState);

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
