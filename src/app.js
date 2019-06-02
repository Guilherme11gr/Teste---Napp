'use strict'

import express from 'express';
import bodyParser from 'body-parser';
import productRouter from './routes/product';
import indexRouter from './routes';
import orderRouter from './routes/order';
import custumerRouter from './routes/customer';
import { connectDataBase } from './database/dataBase';

connectDataBase()

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.use('/products', productRouter);

app.use('/order', orderRouter);

app.use('/customer', custumerRouter);

export default app
