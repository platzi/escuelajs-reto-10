const express = require('express');
const path = require('path');
const ProductService = require('../services');

const receipt = '../assets/receipt.pdf';

const platziStore = (app) => {
  const router = express.Router();
  app.use('/api/', router);

  const productService = new ProductService();

  router.get('/', (req, res) => {
    res.send('API v2');
  });

  router.get('/receipts', (req, res, next) => {
    const file = path.join(__dirname, receipt);
    res.sendFile(file);
  });

  router.get('/products', async (req, res, next) => {
    try {
      const storeProducts = await productService.getProducts();
      res.status(200).json({
        data: storeProducts,
        message: 'products liseted',
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/products/:productId', async (req, res, next) => {
    const { productId } = req.params;

    try {
      const product = await productService.getProduct({ productId });
      res.status(200).json({
        data: product,
        message: 'product retrived',
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/products/', async (req, res, next) => {
    const { body: product } = req;

    try {
      const createProduct = await productService.createProduct({ product });
      res.status(201).json({
        data: createProduct,
        message: 'product created',
      });
    } catch (error) {
      next(error);
    }
  });

  router.put('/products/:productId', async (req, res, next) => {
    const { productId } = req.params;
    const { body: product } = req;
    try {
      const updateProduct = await productService.updateProduct({
        productId,
        product,
      });
      res.status(200).json({
        data: updateProduct,
        message: 'product update',
      });
    } catch (error) {
      next(error);
    }
  });

  router.delete('/products/:productId', async (req, res, next) => {
    const { productId } = req.params;
    try {
      const deleteProduct = await productService.deleteProduct({ productId });
      res.status(200).json({
        data: deleteProduct,
        message: 'product delete',
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('*', (req, res) => {
    res.status(404).send('Error 404');
  });
};

module.exports = platziStore;
