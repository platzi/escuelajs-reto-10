import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './routes/App';
import reducer from './reducers';
import thunk from 'redux-thunk';

const preloadedState = window.__PRELOADED_STATE__;
const store = createStore(reducer, preloadedState, applyMiddleware(thunk));

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
