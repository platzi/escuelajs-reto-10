import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import Routes from '../../frontend/routes/ServerRoutes';
import Layout from '../../frontend/components/Layout';
import reducer from '../../frontend/reducers';
import render from '../render';
import polyfill from '@babel/polyfill'; // eslint-disable-line

const initialState = {
  cart: [],
  products: [],
};

const getProducts = async () => {
  const products = await axios.get(`${process.env.API_URL}/products`);
  return products.data;
};

const main = async (req, res, next) => {
  try {
    try {
      const products = await getProducts();
      initialState.products = products || [];
    } catch (error) {
      throw new Error(error.message);
    }
    const store = createStore(reducer, initialState);
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
