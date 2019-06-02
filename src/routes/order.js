'use strict'

import { Router } from 'express';
import OrderModel from '../models/order';
import httpStatus from 'http-status';

const orderRouter = Router();

orderRouter.get('/', async (req, res) => {
  try {
    const response = await OrderModel.getOrders();

    res.status(httpStatus.CREATED).send({ data: response });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send({ error, });
  }
});

orderRouter.post('/', async (req, res) => {
  try {
    const { body } = req;

    const response = await OrderModel.create(body);

    res.status(201).send({ data: response, message: 'Order Created' })

  } catch (error) {
    res.status(404).send({ error: error.message, });
  }
});

orderRouter.put('/:id', async (req, res) => {
  try {
    const { body, param } = req;

    const response = await OrderModel.update(param.id, body);

    res.status(httpStatus.OK).send({ data: response, message: 'Order updated !' });
  } catch ({ message }) {
    res.status(httpStatus.BAD_REQUEST).send({ message });
  }
});

orderRouter.delete('/:id', async (req, res) => {
  try {
    const { param } = req;

    const response = await OrderModel.delete(param.id);

    res.status(httpStatus.OK).send({ data: response, message: 'Order Deleted !' });
  } catch ({ message }) {
    res.status(httpStatus.BAD_REQUEST).send({ message });
  }
});


export default orderRouter;
