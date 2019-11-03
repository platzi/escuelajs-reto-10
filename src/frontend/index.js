import React from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import App from './routes/App';
import reducer from './reducers';

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const API = 'http://localhost:3001/api/products';
let data = {
  cart: [],
  products: [],
};
// eslint-disable-next-line consistent-return
request.get(API).end((err, respon) => {
  if (err) {
    console.error(err);
    data = {
      cart: [],
      products: [],
    };
  } else {
    data = {
      cart: [],
      products: [...respon.body.data],
    };
    const initialState = data;
    const store = createStore(reducer, initialState, composeEnhacers());

    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('app'),
    );
    console.log(data);
    return data;
  }
});
