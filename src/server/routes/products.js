const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const products = (app) => {
  const router = express.Router();
  app.use('/server/products', router);

  const { API_URL } = process.env;

  router.get('/', (req, res, next) => {
    axios
      .get(`${API_URL}/api/products`)
      .then(({ data, status }) => res.status(status).json(data))
      .catch(error => next(error));
  });
};

export default products;
