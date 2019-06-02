'use-strict'

import mongoose, { Schema } from 'mongoose';

mongoose.set('useCreateIndex', true);

const schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  }
});

export default mongoose.model('Customer', schema);