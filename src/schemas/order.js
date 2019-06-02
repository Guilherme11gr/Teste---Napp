'use-strict'

import mongoose, { Schema } from 'mongoose';

mongoose.set('useCreateIndex', true);

const schema = new Schema({
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
    required: true,
  },

  createDate: {
    type: Date,
    required: true,
    default: Date.now,
  },

  items: [{
    quantity: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true
    },

    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    }
  }]
});

export default mongoose.model('Order', schema);