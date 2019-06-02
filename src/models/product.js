'use-strict'

import '../schemas/products';
import mongoose from 'mongoose'

const Product = mongoose.model('Product');

class ProductModel {
  static async getProductById(id) {
    try {
      const query = { _id: id };

      return Product.findOne(query).lean();
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getProducts() {
    try {
      return Product.find().lean();
    } catch (error) {
      throw new Error(error);
    }
  }

  static async create(product) {
    try {
      const { _id } = await Product.create(product);

      return _id;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default ProductModel;