'use-strict'

import mongoose, { Schema } from 'mongoose';

mongoose.set('useCreateIndex', true);

const schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  unitPrice: {
    type: Number,
    required: true,
  },

  multiple: {
    type: Number,
    required: true,
  }
});

export default mongoose.model('Product', schema);