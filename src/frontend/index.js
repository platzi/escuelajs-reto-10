import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './routes/App';
import reducer from './reducers';

const initialState = {
  cart: [],
  products: [],
};

const middlewares = [thunk];
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middlewares),
);

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
