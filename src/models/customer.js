'use-strict'

import '../schemas/customer';
import mongoose from 'mongoose'

const CustomerModel = mongoose.model('Customer');

class Customer {
  static async getCustomerById(id) {
    try {
      const query = { _id: id };

      return CustomerModel.findOne(query).lean();
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getCustomers() {
    try {
      return CustomerModel.find().lean();
    } catch (error) {
      throw new Error(error);
    }
  }

  static async create(customer) {
    try {
      const { _id } = await CustomerModel.create(customer);

      return _id;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default Customer;