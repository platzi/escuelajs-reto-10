import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import Routes from '../../frontend/routes/ServerRoutes';
import Layout from '../../frontend/components/Layout';
import reducer from '../../frontend/reducers';
import render from '../render';

const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();
const main = async (req, res, next) => {
  try {
    let initialState;

    try {
      const procutsAPI = await axios({
        method: 'get',
        url: process.env.API_PRODUCTS,
      });

      initialState = {
        cart: [],
        products: procutsAPI.data.data,
      };
    } catch (err) {
      initialState = {
        cart: [],
        products: [],
      };
      console.error(err);
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
