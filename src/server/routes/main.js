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
import axios from 'axios';

const main = async (req, res, next) => {
  let initialState;
  try {

    let productsList = await axios({
      url: 'https://platzistore.gabrielpintop.now.sh/api/products',
      method: 'get'
    });

    productsList = productsList.data.data;

    initialState = {
      cart: [],
      products: productsList,
      totalPrice: 0
    };

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
    initialState = {
      cart: [],
      products: [],
      totalPrice: 0
    };
    console.log(err);
  }
};

export default main;
