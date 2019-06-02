'use-strict'

import config from './config';
import mongoose from 'mongoose';

const onListening = (err) => {
  err ? console.error(err) : console.log(`\n\tConnected to \x1b[36m${config.DATA_BASE_URL}\x1b[0m`)
}

const connectDataBase = () => {
  mongoose.connect(config.DATA_BASE_URL, { useNewUrlParser: true }, onListening);
}


export { connectDataBase };