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

const dotenv = require('dotenv');

dotenv.config();

const initialState = {
  cart: [],
  products: [],
  total: 0,
};

const getProducts = async () => {
  const BASE_API = process.env.API;
  try {
    const response = await fetch(`${BASE_API}/api/products`);
    const result = await response.json();
    return result.data;
  } catch (error) {
    throw error;
  }
};

const prepareInitialState = async (state) => {
  const result = await getProducts();
  return {
    ...state,
    products: result,
  };
};

const main = async (req, res, next) => {
  try {
    const customInitialState = await prepareInitialState(initialState);
    const store = createStore(reducer, customInitialState);
    const html = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          <Layout>{renderRoutes(Routes)}</Layout>
        </StaticRouter>
      </Provider>,
    );
    const preloadedState = store.getState();
    res.send(render(html, preloadedState));
  } catch (err) {
    next(err);
  }
};

export default main;
