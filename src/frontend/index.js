import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import App from './routes/App';
import reducer from './reducers';

const initialState = {
  cart: [],
  products: [],
};

if (typeof window !== 'undefined') {
  const preloadedState = window.__PRELOADED_STATE__ || initialState;
  const composeEnhancers =
    process.env.NODE_ENV === 'production' ?
      compose :
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducer, preloadedState, composeEnhancers());
  const history = createBrowserHistory();

  hydrate(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    document.getElementById('app'),
  );
}
