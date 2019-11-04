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

const main = async (req, res, next) => {
  let initialState;
  try {
    try {
      let productList = await axios({
        url: `${process.env.API_URL}/api/products`,
        method: 'get',
      });
      productList = productList.data.data;

      initialState = {
        cart: [],
        products: productList,
      };
    } catch (err) {
      initialState = {
        cart: [],
        products: [],
      };
      console.log(err);
    }
  } catch (err) {
    initialState = {
      cart: [],
      products: [],
    };
    console.log(err);
  }

  try {
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
