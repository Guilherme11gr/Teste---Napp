'use-strict'

import '../schemas/order';
import mongoose from 'mongoose'

const Order = mongoose.model('Order');

class OrderModel {
  static async getOrderById(id) {
    try {
      const query = { _id: id };

      return Order.findOne(query).lean();
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getOrders() {
    try {
      return Order.find().populate('customer').populate('product').lean();
    } catch (error) {
      throw new Error(error);
    }
  }

  static async create(order) {
    try {
      const { _id } = await Order.create(order);

      return _id;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async update(id, order) {
    try {
      const { _id } = await Order.findOneAndUpdate({ _id: id }, order, { new: true });

      return _id;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async delete(id) {
    try {
      const { _id } = await Order.findByIdAndDelete({ _id: id });

      return _id;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default OrderModel;