import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import App from './routes/App';
import reducer from './reducers';

if (typeof window !== 'undefined') {
  const preloadedState = window.__PRELOADED_STATE__;

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

  const store = createStore(reducer, preloadedState, composeEnhancers());

  hydrate(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app'),
  );
}
