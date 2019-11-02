import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './routes/App';
import reducer from './reducers';

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = compose;
} else {
  enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const initialState = {
  cart: [],
  products: [],
};

const store = createStore(
  reducer,
  initialState,
  enhancer(applyMiddleware(thunk)),
);

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
