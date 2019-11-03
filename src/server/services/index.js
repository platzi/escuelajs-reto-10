const MongoLib = require('../lib/mongo');

class ProductService {
  constructor() {
    this.colection = 'products';
    this.mongoDB = new MongoLib();
  }

  async getProducts() {
    const products = await this.mongoDB.getAll(this.colection);
    return products || [];
  }

  async getProduct({ productId }) {
    const product = await this.mongoDB.get(this.colection, productId);
    return product || [];
  }

  async createProduct({ product }) {
    const createProductId = await this.mongoDB.create(this.colection, product);
    return createProductId;
  }

  async updateProduct({ productId, product } = {}) {
    const updateProductId = await this.mongoDB.update(
      this.colection,
      productId,
      product,
    );
    return updateProductId;
  }

  async deleteProduct({ productId }) {
    const deleteProductId = await this.mongoDB.delete(
      this.colection,
      productId,
    );
    return deleteProductId;
  }
}

module.exports = ProductService;
