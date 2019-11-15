const { productsMock } = require('../utils/mocks');

class ProductService {
  async getProducts() {
    try {
      const products = await this.mongodb.getAll(this.collection, {});
      return products;      
    } catch (error) {
      throw new Error(error);
    }
  }

  async getProductsById(id) {
    try {
      const product = await this.mongodb.get(this.collection, id);
      return product;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateProductById({ id, ...data }){
    try {
      const id = await this.mongodb.update(this.collection, id , data);
      return id;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteProductById(id) {
    try {
      const id = await this.mongodb.delete(this.collection, id);
      return id;
    } catch (error) {
      throw new Error(error);
    }
  }

  async createProduct(product){
    try {
      const id = await this.mongodb.create(this.collection, product);
      return id;
    } catch {
      throw new Error(error);
    }
  }
}

module.exports = ProductService;
