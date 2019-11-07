import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import App from './routes/App';
import reducer from './reducers';

if (typeof window !== 'undefined') {
  const preloadedState = window.__PRELOADED_STATE__;
  const store = createStore(reducer, preloadedState);
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
