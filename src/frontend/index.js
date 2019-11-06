import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './routes/App';
import reducer from './reducers';

const preloadedState = window.__PRELOADED_STATE__;
const store = createStore(reducer, preloadedState, applyMiddleware(thunk));

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
