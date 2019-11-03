import React from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import App from './routes/App';
import reducer from './reducers';

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const API = 'https://platzistore-api.now.sh/';
request.get(API).end((err, respon) => {
  if (err) {
    console.error(err);
  } else {
    console.log(respon.body);
  }
});

const initialState = {
  cart: [],
  products: [
    {
      id: '1',
      image: 'https://arepa.s3.amazonaws.com/camiseta.png',
      title: 'Camiseta',
      price: 25,
      description: 'bla bla bla bla bla',
    },
    {
      id: '3',
      image: 'https://arepa.s3.amazonaws.com/mug.png',
      title: 'Mug',
      price: 10,
      description: 'bla bla bla bla bla',
    },
    {
      id: '4',
      image: 'https://arepa.s3.amazonaws.com/pin.png',
      title: 'Pin',
      price: 4,
      description: 'bla bla bla bla bla',
    },
    {
      id: '5',
      image: 'https://arepa.s3.amazonaws.com/stickers1.png',
      title: 'Stickers',
      price: 2,
      description: 'bla bla bla bla bla',
    },
    {
      id: '6',
      image: 'https://arepa.s3.amazonaws.com/stickers2.png',
      title: 'Stickers',
      price: 2,
      description: 'bla bla bla bla bla',
    },
    {
      id: '7',
      image: 'https://arepa.s3.amazonaws.com/hoodie.png',
      title: 'Hoodie',
      price: 35,
      description: 'bla bla bla bla bla',
    },
  ],
};

const store = createStore(reducer, initialState, composeEnhacers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
