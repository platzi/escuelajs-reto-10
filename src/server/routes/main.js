import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import fetch from 'node-fetch';
import Routes from '../../frontend/routes/ServerRoutes';
import Layout from '../../frontend/components/Layout';
import reducer from '../../frontend/reducers';
import render from '../render';

/* const initialState = {
  cart: [],
}; */

const URL = 'http://localhost:3001/api/products';

async function getData(url) {
  const response = await fetch(url);
  const myJson = await response.json();
  return JSON.stringify(myJson);
}

async function main(req, res, next) {
  try {
    const initialState = await getData(URL);

    const store = await createStore(reducer, initialState);

    const html = await renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          <Layout>{renderRoutes(Routes)}</Layout>
        </StaticRouter>
      </Provider>
    );
    const preloadedState = await store.getState();
    await res.send(render(html, preloadedState));
  } catch (err) {
    next(err);
  }
}

export default main;
