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

require('dotenv').config;

const main = async (req, res, next) => {
  try {
    const initialState = {
      cart: [],
      products: [],
    };
    const products = await fetch(`${process.env.API_URL}/api/products`)
      .then(res => res.json())
      .then(data => {
        return data.data;
      })
      .catch(err => console.error(err));
    if (products != null) {
      initialState.products = products;
    }
    const store = createStore(reducer, initialState);
    const html = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          <Layout>{renderRoutes(Routes)}</Layout>
        </StaticRouter>
      </Provider>
    );
    const preloadedState = store.getState();
    res.send(render(html, preloadedState));
  } catch (err) {
    next(err);
  }
};

export default main;
